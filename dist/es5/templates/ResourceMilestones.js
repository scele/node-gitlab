"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

var _infrastructure = require("../infrastructure");

class ResourceMilestones extends _infrastructure.BaseService {
  constructor(resourceType, ...args) {
    super(...args);
    this.url = (0, _urlJoin.default)(this.url, resourceType);
  }

  all(resourceId, options) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.get(this, `${rId}/milestones`, options);
  }

  create(resourceId, title, options) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.post(this, `${rId}/milestones`, options);
  }

  edit(resourceId, milestoneId, options) {
    const [rId, mId] = [resourceId, milestoneId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `${rId}/milestones/${mId}`, options);
  }

  issues(resourceId, milestoneId) {
    const [rId, mId] = [resourceId, milestoneId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/milestones/${mId}/issues`);
  }

  mergeRequests(resourceId, milestoneId) {
    const [rId, mId] = [resourceId, milestoneId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/milestones/${mId}/merge_requests`);
  }

  show(resourceId, milestoneId) {
    const [rId, mId] = [resourceId, milestoneId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/milestones/${mId}`);
  }

}

var _default = ResourceMilestones;
exports.default = _default;