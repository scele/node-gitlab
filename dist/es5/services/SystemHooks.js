"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

class SystemHooks extends _infrastructure.BaseService {
  add(url, options) {
    return _infrastructure.RequestHelper.post(this, 'hooks', (0, _objectSpread2.default)({
      url
    }, options));
  }

  all(options) {
    return _infrastructure.RequestHelper.get(this, 'hooks', options);
  }

  edit(hookId, url, options) {
    const hId = encodeURIComponent(hookId);
    return _infrastructure.RequestHelper.put(this, `hooks/${hId}`, (0, _objectSpread2.default)({
      url
    }, options));
  }

  remove(projectId, hookId) {
    const hId = encodeURIComponent(hookId);
    return _infrastructure.RequestHelper.delete(this, `hooks/${hId}`);
  }

}

var _default = SystemHooks;
exports.default = _default;