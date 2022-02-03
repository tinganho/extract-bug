import type { Currency } from './currencies.js';

export type ConsUnit =
    | Currency
    | '%'
    | 'CENT'
    | 'g'
    | 'GJ'
    | 'GROSZ'
    | 'GWh'
    | 'h'
    | 'kg'
    | 'Kiloton'
    | 'km'
    | 'kWh'
    | 'liter'
    | 'litres'
    | 'm3'
    | 'm³'
    | 'MJ'
    | 'MWh'
    | 'none'
    | 'ÖRE'
    | 'ØRE'
    | 'percent'
    | 'Ton'
    | 'TWh'
    | 'Wh'
    | `${'M' | 'T'}${Currency}`;

export type MomentaryUnit = '°C' | 'kW' | 'l/h' | 'W';

export type Unit = ConsUnit | MomentaryUnit;