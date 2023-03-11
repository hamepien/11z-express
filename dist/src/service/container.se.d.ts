import { Constructable, MetadataKeys } from '../utils/types';
export declare class Container {
    /**
     * Define a unique metadata value.
     *
     * @param target the target object on which to define metadata.
     * @param value a value that contains attached metadata.
     * @param key a key used to store and retrieve metadata.
     * @param propertyKey the property key for the target.
     */
    define<T = unknown>(Target: Constructable | Function | Object, value: T, key: MetadataKeys, propertyKey?: string | symbol): void;
    /**
     * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
     *
     * @param target the target object on which the metadata is defined.
     * @param key a key used to store and retrieve metadata.
     * @param propertyKey the property key for the target.
     * @returns the metadata value for the metadata key if found; otherwise, undefined.
     */
    get<T = unknown>(Target: Constructable | Function | Object, key: MetadataKeys, propertyKey?: string | symbol): T;
    /**
     * Gets the metadata value for the provided metadata key on the target object.
     *
     * @param target the target object on which the metadata is defined.
     * @param key a key used to store and retrieve metadata.
     * @param propertyKey the property key for the target.
     * @returns the metadata value for the metadata key if found; otherwise, undefined.
     */
    getOwn<T = unknown>(Target: Constructable | Function | Object, key: MetadataKeys, propertyKey?: string | symbol): T;
    /**
     * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
     *
     * @param target the target object on which the metadata is defined.
     * @param key a key used to store and retrieve metadata.
     * @param propertyKey the property key for the target.
     * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
     */
    has(Target: Constructable | Function | Object, key: MetadataKeys, propertyKey?: string | symbol): boolean;
}
