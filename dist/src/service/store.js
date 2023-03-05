"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const types_1 = require("../utils/types");
const container_1 = require("./container");
const injector_token_1 = require("../lib/injector-token");
const reflector_1 = require("./reflector");
/**
 * The Store service is wrapping all application's state.
 */
class Store {
    /**
     * ...
     */
    static defineInjector(Target, inject) {
        // Injector & paramTypes variables.
        let injector = this.findInjector(Target);
        const paramTypes = this.container.get(Target, types_1.MetadataKeys.__paramtypes__);
        // If there is no injector will create one.
        if (!injector)
            injector = this.createInjector(Target);
        // Injectable.
        if (!inject) {
            paramTypes === null || paramTypes === void 0 ? void 0 : paramTypes.forEach((param, i) => {
                if (!injector.deps[i]) {
                    injector.deps[i] = { id: this.injectorId(param) };
                }
            });
            return Target; // Return the target.
        }
        // Inject.
        injector.deps[inject.index] = {
            id: this.injectorId(inject.Injectable)
        };
        return Target; // Return the target.
    }
    /**
     * ...
     */
    static findInjector(Injectable) {
        const id = this.injectorId(Injectable);
        return this.injectors.find((injector) => injector.id === id);
    }
    /**
     * ...
     */
    static injectorId(Injectable) {
        // NOTE: Check if injectable is an instanceof Token.
        // return a Token instance with the name property as an Id.
        if (Injectable instanceof injector_token_1.InjectorToken)
            return Injectable;
        // Otherwise return the class instance which is `Token instance with the name property` as an Id.
        return reflector_1.Reflector.getInjectorId(Injectable);
    }
    /**
     * ...
     */
    static createInjector(Target) {
        const id = reflector_1.Reflector.setInjectorId(Target);
        const injector = {
            id,
            Type: Target,
            deps: []
        };
        // push values into injector.
        this.injectors.push(injector);
        return injector; // return the injector.
    }
}
exports.Store = Store;
/**
 * @property `injectors` injector store providers.
 */
Store.injectors = [];
/**
 * @property `container` Class instance.
 */
Store.container = new container_1.Container();
//# sourceMappingURL=store.js.map