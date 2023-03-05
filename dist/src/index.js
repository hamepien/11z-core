"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineInjector = exports.Injector = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const store_1 = require("./service/store");
/** Exporting decorators from deco.  */
tslib_1.__exportStar(require("./deco"), exports);
/** Exporting regular stuffs.  */
var entry_1 = require("./entry");
Object.defineProperty(exports, "Injector", { enumerable: true, get: function () { return entry_1.Injector; } });
const defineInjector = (Target, inject) => store_1.Store.defineInjector(Target, inject);
exports.defineInjector = defineInjector;
//# sourceMappingURL=index.js.map