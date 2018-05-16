"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

class ProjectHooks extends _infrastructure.BaseService {
  all(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/hooks`, options);
  }

  show(projectId, hookId) {
    const [pId, hId] = [projectId, hookId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/hooks/${hId}`);
  }

  add(projectId, url, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/hooks`, (0, _objectSpread2.default)({
      url
    }, options));
  }

  edit(projectId, hookId, url, options) {
    const [pId, hId] = [projectId, hookId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/hooks/${hId}`, (0, _objectSpread2.default)({
      url
    }, options));
  }

  remove(projectId, hookId) {
    const [pId, hId] = [projectId, hookId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/hooks/${hId}`);
  }

}

var _default = ProjectHooks;
exports.default = _default;