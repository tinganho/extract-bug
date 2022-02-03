Extract bug
========

We suspect that Extract<BigUnion, T> is a bit slow and uses a linear search to extract the types.
We use a big string literal union to compose all translation strings in the project. Right now, they consists
of around 6000 strings.


We have some functions to extract these translation strings such as:

```ts
declare function baseUnit<T extends Measure>(
    measure: T
): [TranslationKeys<`quantityUi.units.${T}`>, string];
```

Though we have noticed that usage of `TranslationKeys<T>` incurs a hug performance impact on our project. Several multiples 
compared to not using `TranslationKeys<T>`. We suspect this can be optimized.
