"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

class Epics extends _infrastructure.BaseService {
  all(groupId) {
    const gId = encodeURIComponent(groupId);
    return _infrastructure.RequestHelper.get(this, `groups/${gId}/epics`);
  }

  create(groupId, title, options) {
    const gId = encodeURIComponent(groupId);
    return _infrastructure.RequestHelper.post(this, `groups/${gId}/epics`, (0, _objectSpread2.default)({
      title
    }, options));
  }

  edit(groupId, epicId, options) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `groups/${gId}/epics/${eId}`, options);
  }

  remove(groupId, epicId) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `groups/${gId}/epics/${eId}`);
  }

  show(groupId, epicId) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `groups/${gId}/epics/${eId}`);
  }

}

var _default = Epics;
exports.default = _default;