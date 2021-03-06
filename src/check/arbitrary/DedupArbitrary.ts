import { Random } from '../../random/generator/Random';
import { stream } from '../../stream/Stream';
import { cloneMethod } from '../symbols';
import { Arbitrary } from './definition/Arbitrary';
import { Shrinkable } from './definition/Shrinkable';

/** @internal */
class DedupArbitrary<T> extends Arbitrary<T[]> {
  constructor(readonly arb: Arbitrary<T>, readonly numValues: number) {
    super();
  }
  generate(mrng: Random): Shrinkable<T[]> {
    const items: Shrinkable<T>[] = [];
    if (this.numValues <= 0) {
      return this.wrapper(items);
    }
    for (let idx = 0; idx !== this.numValues - 1; ++idx) {
      items.push(this.arb.generate(mrng.clone()));
    }
    items.push(this.arb.generate(mrng));
    return this.wrapper(items);
  }
  private static makeItCloneable<T>(vs: T[], shrinkables: Shrinkable<T>[]) {
    (vs as any)[cloneMethod] = () => {
      const cloned = [];
      for (let idx = 0; idx !== shrinkables.length; ++idx) {
        cloned.push(shrinkables[idx].value); // push potentially cloned values
      }
      this.makeItCloneable(cloned, shrinkables);
      return cloned;
    };
    return vs;
  }
  private wrapper(items: Shrinkable<T>[]): Shrinkable<T[]> {
    let cloneable = false;
    const vs = [];
    for (let idx = 0; idx !== items.length; ++idx) {
      const s = items[idx];
      cloneable = cloneable || s.hasToBeCloned;
      vs.push(s.value);
    }
    if (cloneable) {
      DedupArbitrary.makeItCloneable(vs, items);
    }
    return new Shrinkable(vs, () => stream(this.shrinkImpl(items)).map((v) => this.wrapper(v)));
  }
  private *shrinkImpl(items: Shrinkable<T>[]): IterableIterator<Shrinkable<T>[]> {
    if (items.length === 0) {
      return;
    }
    const its = items.map((s) => s.shrink()[Symbol.iterator]());
    let cur = its.map((it) => it.next());
    while (!cur[0].done) {
      yield cur.map((c) => c.value);
      cur = its.map((it) => it.next());
    }
  }
}

type TupleOf<T, N extends number> = N extends 0
  ? []
  : N extends 1
  ? [T]
  : N extends 2
  ? [T, T]
  : N extends 3
  ? [T, T, T]
  : N extends 4
  ? [T, T, T, T]
  : T[];

/**
 * Deduplicate the values generated by `arb`
 * in order to produce fully equal values
 *
 * @param arb - Source arbitrary
 * @param numValues - Number of values to produce
 */
function dedup<T, N extends number>(arb: Arbitrary<T>, numValues: N): Arbitrary<TupleOf<T, N>>;
function dedup<T>(arb: Arbitrary<T>, numValues: number): Arbitrary<T[]> {
  return new DedupArbitrary(arb, numValues);
}

export { dedup };
