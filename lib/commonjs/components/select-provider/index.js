"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _selectProvider = require("./select-provider");
Object.keys(_selectProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _selectProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _selectProvider[key];
    }
  });
});
//# sourceMappingURL=index.js.map