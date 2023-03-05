import { Constructable } from '../utils/types';
import { InjectorToken } from '../lib/injector-token';
export declare class Reflector {
    /**
     * ...
     */
    static setInjectorId(Target: Constructable | Function): InjectorToken;
    /**
     * ...
     */
    static getInjectorId(Target: Constructable): InjectorToken;
}
