"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

class ProjectImportExport extends _infrastructure.BaseService {
  download(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/export/download`);
  }

  exportStatus(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/export`);
  }

  import(file, path, options) {
    return _infrastructure.RequestHelper.post(this, 'projects/import', (0, _objectSpread2.default)({
      file,
      path
    }, options));
  }

  importStatus(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/import`);
  }

  schedule(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/export`, options);
  }

}

var _default = ProjectImportExport;
exports.default = _default;