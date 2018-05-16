"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

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
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/repository/commits`, (0, _objectSpread2.default)({
      branch,
      commitMessage: message,
      actions
    }, options));
  }

  createComment(projectId, sha, note, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/repository/commits/${sha}/comments`, (0, _objectSpread2.default)({
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