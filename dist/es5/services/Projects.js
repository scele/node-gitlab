"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _infrastructure = require("../infrastructure");

var _Events = require("./Events");

class Projects extends _infrastructure.BaseService {
  all(options) {
    return _infrastructure.RequestHelper.get(this, 'projects', options);
  }

  create(options) {
    const url = options.userId ? `projects/user/${encodeURIComponent(options.userId)}` : 'projects';
    return _infrastructure.RequestHelper.post(this, url, options);
  }

  edit(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}`, options);
  }

  events(projectId, options) {
    (0, _Events.validateEventOptions)(options.action, options.targetType);
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/events`, options);
  }

  fork(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/fork`, options);
  }

  forks(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/forks`, options);
  }

  remove(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}`);
  }

  search(projectName) {
    return _infrastructure.RequestHelper.get(this, 'projects', {
      search: projectName
    });
  }

  share(projectId, groupId, groupAccess, options) {
    const pId = encodeURIComponent(projectId);
    if (!groupId || !groupAccess) throw new Error('Missing required arguments');
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/share`, (0, _objectSpread2.default)({
      groupId,
      groupAccess
    }, options));
  }

  show(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}`);
  }

  star(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/star`);
  }

  statuses(projectId, sha, state, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/statuses/${sha}`, (0, _objectSpread2.default)({
      state
    }, options));
  }

  unshare(projectId, groupId) {
    const [pId, gId] = [projectId, groupId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/share${gId}`);
  }

  unstar(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/unstar`);
  }

  upload(projectId, filePath, {
    fileName = _path.default.basename(filePath)
  } = {}) {
    const pId = encodeURIComponent(projectId);

    const file = _fs.default.readFileSync(filePath);

    return _infrastructure.RequestHelper.post(this, `projects/${pId}/uploads`, {
      file: {
        value: file,
        options: {
          filename: fileName,
          contentType: 'application/octet-stream'
        }
      }
    }, true);
  }

}

var _default = Projects;
exports.default = _default;