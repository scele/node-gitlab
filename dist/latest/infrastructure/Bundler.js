"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function Bundler(...services) {
  const combined = Object.assign({}, ...services);
  return class Bundle {
    constructor(options) {
      Object.entries(combined).forEach(([name, Service]) => {
        this[name] = new Service(options);
      });
    }

  };
}

var _default = Bundler;
exports.default = _default;