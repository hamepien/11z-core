"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = void 0;
const store_1 = require("../service/store");
/**
 * ...
 */
function Inject(Injectable) {
    return (Target, _propertyKey, index) => {
        // Define a new metadata object.
        store_1.Store.defineInjector(Target, { Injectable, index });
    };
}
exports.Inject = Inject;
//# sourceMappingURL=inject.deco.js.map