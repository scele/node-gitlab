"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

class Labels extends _infrastructure.BaseService {
  all(projectId, options = {}) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/labels`, options);
  }

  create(projectId, options = {}) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/labels`, options);
  }

  edit(projectId, labelName, options = {}) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/labels`, (0, _objectSpread2.default)({
      name: labelName
    }, options));
  }

  remove(projectId, labelName) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/labels`, {
      name: labelName
    });
  }

  subscribe(projectId, labelId, options = {}) {
    const [pId, lId] = [projectId, labelId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues/${lId}/subscribe`, options);
  }

  unsubscribe(projectId, labelId) {
    const [pId, lId] = [projectId, labelId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/issues/${lId}/unsubscribe`);
  }

}

var _default = Labels;
exports.default = _default;