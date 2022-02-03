Extract bug
===================

We have noticed that Extract<BigUnion, T> is a bit slow.
We use a big string literal union to compose all translation strings in the project. Right now, they consists
of around 6000 strings.

We have some functions to extract these translation strings such as:

```ts
declare function baseUnit<T extends Measure>(
    measure: T
): [TranslationKeys<`quantityUi.units.${T}`>, string];
```

Though, we have noticed that usage of `TranslationKeys<T>` incurs a hug performance impact on our project. Several multiples 
compared to not using `TranslationKeys<T>`. We suspect this can be optimized.

To test out the performance impact you can run 

```
tsc --generateTraceDir traceDir --incremental false
```
And then get the hotspots with:
```
npx analyze-trace traceDir
```

```
declare function baseUnit<T extends Measure>(
    measure: T
): [TranslationKeys<`quantityUi.units.${T}`>, string];


declare const quantity: Quantity;
console.log(baseUnit(quantity));
```