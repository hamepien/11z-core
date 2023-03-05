"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = void 0;
const store_1 = require("../service/store");
/**
 * ...
 */
function Injectable() {
    return (Target) => {
        // Define a new metadata object.
        store_1.Store.defineInjector(Target);
    };
}
exports.Injectable = Injectable;
//# sourceMappingURL=injectable.deco.js.map