"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _infrastructure = require("../infrastructure");

class Runners extends _infrastructure.BaseService {
  all(_ref = {}) {
    let {
      projectId
    } = _ref,
        options = (0, _objectWithoutProperties2.default)(_ref, ["projectId"]);
    const url = projectId ? `projects/${encodeURIComponent(projectId)}/runners` : 'runners/all';
    return _infrastructure.RequestHelper.get(this, url, options);
  }

  allOwned(options) {
    return _infrastructure.RequestHelper.get(this, 'runners', options);
  }

  edit(runnerId, attributes) {
    const rId = encodeURIComponent(runnerId);
    return _infrastructure.RequestHelper.put(this, `runners/${rId}`, attributes);
  }

  enable(projectId, runnerId) {
    const [pId, rId] = [projectId, runnerId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/runners`, {
      runnerId: rId
    });
  }

  disable(projectId, runnerId) {
    const [pId, rId] = [projectId, runnerId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/runners/${rId}`);
  }

  jobs(runnerId) {
    const rId = encodeURIComponent(runnerId);
    return _infrastructure.RequestHelper.get(this, `runners/${rId}/jobs`);
  }

  remove(runnerId) {
    const rId = encodeURIComponent(runnerId);
    return _infrastructure.RequestHelper.delete(this, `runners/${rId}`);
  }

  show(runnerId) {
    const rId = encodeURIComponent(runnerId);
    return _infrastructure.RequestHelper.get(this, `runners/${rId}`);
  }

}

var _default = Runners;
exports.default = _default;