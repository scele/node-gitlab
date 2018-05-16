"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _infrastructure = require("../infrastructure");

class Issues extends _infrastructure.BaseService {
  addSpentTime(projectId, issueId, duration) {
    const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues/${iId}/add_spent_time`, {
      duration
    });
  }

  addTimeEstimate(projectId, issueId, duration) {
    const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues/${iId}/time_estimate`, {
      duration
    });
  }

  all(_ref) {
    let {
      projectId
    } = _ref,
        options = (0, _objectWithoutProperties2.default)(_ref, ["projectId"]);
    const url = projectId ? `projects/${encodeURIComponent(projectId)}/issues` : 'issues';
    return _infrastructure.RequestHelper.get(this, url, options);
  }

  create(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues`, options);
  }

  edit(projectId, issueId, options) {
    const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/issues/${iId}`, options);
  }

  link(projectId, issueIId, targetProjectId, targetIssueId, options = {}) {
    const [pId, iId] = [projectId, issueIId].map(encodeURIComponent);
    const [targetpId, targetIId] = [targetProjectId, targetIssueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues/${iId}/links`, (0, _objectSpread2.default)({
      targetProjectId: targetpId,
      targetIssueId: targetIId
    }, options));
  }

  remove(projectId, issueId) {
    const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/issues/${iId}`);
  }

  resetSpentTime(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues/${mId}/reset_spent_time`);
  }

  resetTimeEstimate(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues/${mId}/reset_time_estimate`);
  }

  show(projectId, issueId) {
    const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/issues/${iId}`);
  }

  subscribe(projectId, issueId, options) {
    const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues/${iId}/subscribe`, options);
  }

  timeStats(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/issues/${mId}/time_stats`);
  }

  unsubscribe(projectId, issueId) {
    const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/issues/${iId}/unsubscribe`);
  }

}

var _default = Issues;
exports.default = _default;