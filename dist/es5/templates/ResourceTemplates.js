"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

var _infrastructure = require("../infrastructure");

class ResourceTemplates extends _infrastructure.BaseService {
  constructor(resourceType, ...args) {
    super(...args);
    this.url = (0, _urlJoin.default)(this.url, 'templates', resourceType);
  }

  all(options) {
    return _infrastructure.RequestHelper.get(this, '', options);
  }

  show(resourceId) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.post(this, `${rId}`);
  }

}

var _default = ResourceTemplates;
exports.default = _default;