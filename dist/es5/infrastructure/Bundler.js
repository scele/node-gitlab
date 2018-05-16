"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _entries = _interopRequireDefault(require("@babel/runtime/core-js/object/entries"));

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

function Bundler(...services) {
  const combined = (0, _assign.default)({}, ...services);
  return class Bundle {
    constructor(options) {
      (0, _entries.default)(combined).forEach(([name, Service]) => {
        this[name] = new Service(options);
      });
    }

  };
}

var _default = Bundler;
exports.default = _default;