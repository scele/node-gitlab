"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Commits extends _infrastructure.BaseService {
  all(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/repository/commits`, options);
  }

  cherryPick(projectId, sha, branch) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/repository/commits/${sha}/cherry_pick`, {
      branch
    });
  }

  comments(projectId, sha) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/repository/commits/${sha}/comments`);
  }

  create(projectId, branch, message, actions = [], options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/repository/commits`, _objectSpread({
      branch,
      commitMessage: message,
      actions
    }, options));
  }

  createComment(projectId, sha, note, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/repository/commits/${sha}/comments`, _objectSpread({
      note
    }, options));
  }

  diff(projectId, sha) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/repository/commits/${sha}/diff`);
  }

  editStatus(projectId, sha, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/statuses/${sha}`, options);
  }

  references(projectId, sha) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/repository/commits/${sha}/refs`);
  }

  show(projectId, sha) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/repository/commits/${sha}`);
  }

  status(projectId, sha, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/repository/commits/${sha}/statuses`, options);
  }

}

var _default = Commits;
exports.default = _default;