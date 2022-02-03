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

Though, we have noticed that usage of `TranslationKeys<T>` incurs a huge performance impact on our project. Several multiples 
compared to not using `TranslationKeys<T>`. We suspect this can be optimized. Also TS Server take a long time to load.

To test out the performance impact you can run: 

```
npx tsc --generateTraceDir traceDir --incremental false
```
And then get the hotspots with:
```
npx analyze-trace traceDir
```

Tweak the code in `test.ts` by removing `TranslationKeys<T>` below:

```ts
declare function baseUnit<T extends Measure>(
    measure: T
): [TranslationKeys<`quantityUi.units.${T}`>, string];


declare const quantity: Quantity;
console.log(baseUnit(quantity));
```

And run the build and hotspot commands again. Voila no hotspots.