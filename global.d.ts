
export type ValueOf<T> = T extends Map<unknown, infer R>
? R
: T extends Record<number | string | symbol, infer R>
? R
: T extends Array<infer R>
? R
: T extends ReadonlyArray<infer R>
? R
: T extends Set<infer R>
? R
: T[keyof T];
type KeyToKeyNoIndex<T> = {
    [K in keyof T]: string extends K ? never : number extends K ? never : K;
};
type ValuesOf<T> = T extends { [K in keyof T]: infer U } ? U : never;

export type KnownKeys<T> = ValuesOf<KeyToKeyNoIndex<T>>;

declare global {
    interface ObjectConstructor {
        // entries<T extends ArrayLike<unknown>>(
        //     o: T
        // ): Array<[string, ValueOf<T>]>;
        entries<T extends PropertyKey, U>(o: Record<T, U>): Array<[T, U]>;
        // entries<T>(
        //     o: T
        // ): Array<
        //     [
        //         KnownKeys<T>,
        //         ValueOf<T>
        //     ]
        // >;
    }
}