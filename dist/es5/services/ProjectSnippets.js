"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VISIBILITY_LEVELS = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

const VISIBILITY_LEVELS = {
  PRIVATE: 'private',
  INTERNAL: 'internal',
  PUBLIC: 'public'
};
exports.VISIBILITY_LEVELS = VISIBILITY_LEVELS;

class ProjectSnippets extends _infrastructure.BaseService {
  all(projectId, options = {}) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/snippets`, options);
  }

  content(projectId, snippetId) {
    const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/snippets/${sId}/raw`);
  }

  create(projectId, title, fileName, code, visibility, options = {}) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/snippets`, (0, _objectSpread2.default)({
      title,
      fileName,
      code,
      visibility
    }, options));
  }

  edit(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/snippets`, options);
  }

  remove(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/snippets`);
  }

  show(projectId, snippetId) {
    const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/snippets/${sId}`);
  }

  userAgentDetails(projectId, snippetId) {
    const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/snippets/${sId}/user_agent_detail`);
  }

}

var _default = ProjectSnippets;
exports.default = _default;