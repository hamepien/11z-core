import { Constructable, MetadataKeys } from '../utils/types';
/**
 * The Container service is wrapping all application's operation.
 */
export declare class Container {
    /**
     * Define a unique metadata value.
     *
     * @param target The target object on which to define metadata.
     * @param value A value that contains attached metadata.
     * @param key A key used to store and retrieve metadata.
     * @param propertyKey The property key for the target.
     */
    define<T = unknown>(Target: Constructable | Function | Object, value: T, key: MetadataKeys, propertyKey?: string | symbol): void;
    /**
     * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
     *
     * @param target The target object on which the metadata is defined.
     * @param key A key used to store and retrieve metadata.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, undefined.
     */
    get<T = unknown>(Target: Constructable | Function | Object, key: MetadataKeys, propertyKey?: string | symbol): T;
}
