"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reflector = void 0;
const types_1 = require("../utils/types");
const injector_token_1 = require("../lib/injector-token");
const store_1 = require("./store");
class Reflector {
    /**
     * ...
     */
    static setInjectorId(Target) {
        const id = new injector_token_1.InjectorToken(Target.name);
        // define a new metadata object and set it up in the container Store.
        store_1.Store.container.define(Target, id, types_1.MetadataKeys.__core_injectable__);
        return id; // return the id.
    }
    /**
     * ...
     */
    static getInjectorId(Target) {
        return store_1.Store.container.get(Target, types_1.MetadataKeys.__core_injectable__);
    }
}
exports.Reflector = Reflector;
//# sourceMappingURL=reflector.js.map