import { InjectorToken } from '../lib/injector-token';
/**
 * NonSafe type is `any` type.
 */
export type NonSafe = any;
/**
 * Generic type for class definitions.
 */
export type Constructable<T = unknown> = new (...args: NonSafe[]) => T;
/**
 * Possible metadata keys.
 */
export declare enum MetadataKeys {
    __core_injectable__ = "key:__core_injectable__",
    __paramtypes__ = "design:paramtypes"
}
/**
 * Core types wrapper.
 */
export declare namespace core {
    /**
     * Possible injectable types.
     */
    type Injectable<T = unknown, S = unknown> = Constructable<T> | InjectorToken<S>;
    /**
     * Possible injectable id type.
     */
    type InjectableId<S = unknown> = InjectorToken<S>;
    /**
     * Possible injector types.
     */
    interface Injector<T = unknown, S = unknown> {
        id: InjectableId<S>;
        Type: Constructable<T>;
        deps: Dependency<S>[];
        value?: unknown;
    }
    /**
     * Possible injectable dependency types.
     */
    interface Dependency<S = unknown> {
        id: InjectableId<S>;
    }
}
