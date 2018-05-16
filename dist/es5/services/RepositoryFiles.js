"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

class RepositoryFiles extends _infrastructure.BaseService {
  create(projectId, filePath, branch, options) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/repository/files/${path}`, (0, _objectSpread2.default)({
      branch
    }, options));
  }

  edit(projectId, filePath, branch, options) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/repository/files/${path}`, (0, _objectSpread2.default)({
      branch
    }, options));
  }

  remove(projectId, filePath, branch, options) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/repository/files/${path}`, (0, _objectSpread2.default)({
      branch
    }, options));
  }

  show(projectId, filePath, ref) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/repository/files/${path}`, {
      ref
    });
  }

  showRaw(projectId, filePath, ref) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/repository/files/${path}/raw`, {
      ref
    });
  }

}

var _default = RepositoryFiles;
exports.default = _default;