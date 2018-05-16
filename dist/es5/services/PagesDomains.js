"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

class PagesDomains extends _infrastructure.BaseService {
  all({
    projectId
  } = {}) {
    const url = projectId ? `projects/${encodeURIComponent(projectId)}/` : '';
    return _infrastructure.RequestHelper.get(this, `${url}page/domains`);
  }

  create(projectId, domain, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/pages/domains`, (0, _objectSpread2.default)({
      domain
    }, options));
  }

  edit(projectId, domain, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/pages/domains/${domain}`, options);
  }

  show(projectId, domain) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/pages/domains/${domain}`);
  }

  remove(projectId, domain) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/pages/domains/${domain}`);
  }

}

var _default = PagesDomains;
exports.default = _default;