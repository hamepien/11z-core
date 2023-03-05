import { Constructable, core } from '../utils/types';
import { Container } from './container';
/**
 * The Store service is wrapping all application's state.
 */
export declare class Store {
    /**
     * @property `injectors` injector store providers.
     */
    private static injectors;
    /**
     * @property `container` Class instance.
     */
    static container: Container;
    /**
     * ...
     */
    static defineInjector(Target: Constructable | Function, inject?: {
        index: number;
        Injectable: core.Injectable;
    }): Constructable | Function;
    /**
     * ...
     */
    static findInjector(Injectable: core.Injectable): core.Injector;
    /**
     * ...
     */
    private static injectorId;
    /**
     * ...
     */
    private static createInjector;
}
