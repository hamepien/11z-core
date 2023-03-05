import 'reflect-metadata';
import { Constructable, core } from './utils/types';
/** Exporting decorators from deco.  */
export * from './deco';
/** Exporting regular stuffs.  */
export { Injector } from './entry';
export declare const defineInjector: (Target: Function | Constructable, inject?: {
    index: number;
    Injectable: core.Injectable<unknown, unknown>;
} | undefined) => Function | Constructable;
