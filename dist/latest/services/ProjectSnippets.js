"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VISIBILITY_LEVELS = exports.default = void 0;

var _infrastructure = require("../infrastructure");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/snippets`, _objectSpread({
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