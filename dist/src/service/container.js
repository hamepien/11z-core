"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
/**
 * The Container service is wrapping all application's operation.
 */
class Container {
    /**
     * Define a unique metadata value.
     *
     * @param target The target object on which to define metadata.
     * @param value A value that contains attached metadata.
     * @param key A key used to store and retrieve metadata.
     * @param propertyKey The property key for the target.
     */
    define(Target, value, key, propertyKey) {
        // If propertyKey  is given.
        if (propertyKey) {
            // Define metadata with propertyKey .
            Reflect.defineMetadata(key, value, Target, propertyKey);
        }
        // Define metadata.
        Reflect.defineMetadata(key, value, Target);
    }
    /**
     * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
     *
     * @param target The target object on which the metadata is defined.
     * @param key A key used to store and retrieve metadata.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, undefined.
     */
    get(Target, key, propertyKey) {
        // if propertyKey is given.
        if (propertyKey) {
            // Gets metadata with propertyKey.
            return Reflect.getMetadata(key, Target, propertyKey);
        }
        // Gets metadata.
        return Reflect.getMetadata(key, Target);
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map