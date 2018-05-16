"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _urlJoin = _interopRequireDefault(require("url-join"));

var _infrastructure = require("../infrastructure");

class ResourceMembers extends _infrastructure.BaseService {
  constructor(resourceType, ...args) {
    super(...args);
    this.url = (0, _urlJoin.default)(this.url, resourceType);
  }

  all(resourceId) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.get(this, `${rId}/members`);
  }

  add(resourceId, userId, accessLevel, options) {
    const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `${rId}/members`, (0, _objectSpread2.default)({
      user_id: uId,
      access_level: parseInt(accessLevel, 10)
    }, options));
  }

  edit(resourceId, userId, accessLevel, options) {
    const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `${rId}/members/${uId}`, (0, _objectSpread2.default)({
      access_level: parseInt(accessLevel, 10)
    }, options));
  }

  show(resourceId, userId) {
    const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/members/${uId}`);
  }

  remove(resourceId, userId) {
    const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `${rId}/members/${uId}`);
  }

}

var _default = ResourceMembers;
exports.default = _default;