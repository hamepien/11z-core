"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injector = void 0;
const store_1 = require("./service/store");
/**
 * A top-level class injector.
 */
class Injector {
    /**
     * ...
     */
    static get(Target) {
        // TODO
        const injector = store_1.Store.findInjector(Target);
        // throw.
        if (!injector)
            throw new Error('GetInjectorError: You are missing something or doing something incorrectly. Use @Injectable or @Inject instead.');
        return this.resolveInjectorValue(injector);
    }
    /**
     * ...
     */
    static resolveInjectorValue(injector) {
        // Check if injector value does exist then return them.
        if (injector.value)
            return injector.value;
        // deps constance.
        const deps = injector.deps.map((dep) => {
            const depInjector = store_1.Store.findInjector(dep.id);
            // Throw.
            if (!depInjector)
                throw new Error('DepInjectorError: An error occurred.');
            return this.resolveInjectorValue(depInjector);
        });
        // set injector value.
        injector.value = new injector.Type(...deps);
        return injector.value; // return the injector value.
    }
}
exports.Injector = Injector;
//# sourceMappingURL=entry.js.map