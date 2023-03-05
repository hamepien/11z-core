import { Constructable } from './utils/types';
/**
 * A top-level class injector.
 */
export declare class Injector {
    /**
     * ...
     */
    static get<T = unknown>(Target: Constructable<T>): T;
    /**
     * ...
     */
    private static resolveInjectorValue;
}
