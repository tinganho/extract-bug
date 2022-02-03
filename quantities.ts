import type { Currency } from './currencies';
import type { Translations } from './translation';
import type { Unit } from './unit';

// 68 entries
export type ConsQuantity =
    // 15 entries
    | CostQuantity

    // 5 entries
    | EnvironmentalQuantity

    // 30 entries
    | VatQuantity

    // 8 entries
    | WasteQuantity

    // 10 entries
    | 'AMOUNT'
    | 'DATA_QUALITY'
    | 'DISTANCE_PKM'
    | 'DISTANCE'
    | 'ENERGY_NONRENEWABLE'
    | 'ENERGY_RENEWABLE'
    | 'ENERGY'
    | 'PERCENT'
    | 'VOLUME'
    | 'WEIGHT';


export type CostQuantity =
    | `COST_${Currency}_${'REAL' | 'SIMUL'}_TOTAL`
    | `COST_${Currency}_REAL`
    | `COST_${Currency}`;

export type DDAdjustedQuantity =
    // TODO: Remove ENERGY_DDADJUSTED
    | 'ENERGY_DDADJUSTED'
    | 'ENERGY_DDN_CDD'
    | 'ENERGY_DDN_HDD'
    | 'ENERGY_SMHI_EI'
    | 'ENERGY_SMHI_HDD';

export type EnvironmentalQuantity =
    | 'ENV_CO2_COMP'
    | 'ENV_CO2_REAL'
    | 'ENV_CO2_SIMUL_LOCATION'
    | 'ENV_CO2_SIMUL_MARKET'
    | 'ENV_CO2';

type MiscellaneousQuantity = 'NONE';

export type MomentaryQuantity =
    | 'AIR_TEMPERATURE'
    | 'CURRENT'
    | 'DELTA_TEMPERATURE'
    | 'DURATION'
    | 'ENERGY_REACTIVE'
    | 'FLOW'
    | 'FORWARD_TEMPERATURE'
    | 'HUMIDITY'
    | 'POWER_PHASE_ONE'
    | 'POWER_PHASE_THREE'
    | 'POWER_PHASE_TWO'
    | 'POWER'
    | 'RETURN_TEMPERATURE'
    | 'VOLTAGE'
    | 'WIND_SPEED';

// 30
export type VatQuantity = `${CostQuantity}_VAT_REDUCED` | `${CostQuantity}_VAT`;

export type WasteQuantity =
    | 'COMPOSTING__DIVERTED_OTHER'
    | 'DEEP_WELL_INJECTION__DIVERTED_OTHER'
    | 'INCINERATION__INCINERATION'
    | 'LANDFILL__LANDFILL'
    | 'ON-SITE_STORAGE__DIVERTED_OTHER'
    | 'OTHER__OTHER'
    | 'RECOVERY__DIVERTED_TO_ENERGY'
    | 'RECYCLING__DIVERTED_RECYCLING'
    | 'REUSE__DIVERTED_OTHER';


// 89 entries
export type Quantity =

    // 68
    | ConsQuantity

    // 5
    | DDAdjustedQuantity

    // 1
    | MiscellaneousQuantity

    // 15
    | MomentaryQuantity;


export type DivideBy =
    | 'area'
    | 'environmental_guests'
    | 'guestnights'
    | 'keyvalue'
    | 'servings'
    | 'usage'
    | 'visitors';
    
type PathImpl<T, Key extends keyof T> = Key extends string
? T[Key] extends Record<string, unknown>
    ?
            | `${Key}.${Exclude<keyof T[Key], keyof unknown[]> & string}`
            | `${Key}.${PathImpl<
                T[Key],
                Exclude<keyof T[Key], keyof unknown[]>
            > &
                string}`
    : never
: never;
type PathImpl2<T> = PathImpl<T, keyof T> | keyof T;

export type Path<T> = PathImpl2<T> extends string | keyof T
    ? PathImpl2<T>
    : keyof T;

// Measure consists of 8 + 89 + 1 = 98 entries
export type Measure = DivideBy | Quantity | 'degrees';

// This one takes around 1s to resolve. Yes we know, but after this everything should be fast?
export type AllPaths = Path<Translations>;

// AllPaths consists of ~6000 entries.
export type TranslationKeys<T extends string> = Extract<AllPaths, T>;
