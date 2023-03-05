/**
 * ...
 * @example [new Token<string>('ANY_STRING_TOKEN')]
 * @returns the injector token class instance.
 */
export declare class InjectorToken<T = unknown> {
    name: T;
    constructor(name: T);
}
