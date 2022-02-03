
import { Quantity, Measure, TranslationKeys } from './quantities';


declare function baseUnit<T extends Measure>(
    measure: T
): [TranslationKeys<`quantityUi.units.${T}`>, string];


declare const quantity: Quantity;
console.log(baseUnit(quantity));