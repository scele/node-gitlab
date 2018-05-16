"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _infrastructure = require("../infrastructure");

class MergeRequests extends _infrastructure.BaseService {
  accept(projectId, mergerequestId, options) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/merge_requests/${mId}/merge`, options);
  }

  addSpentTime(projectId, mergerequestId, duration) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues/${mId}/add_spent_time`, {
      duration
    });
  }

  addTimeEstimate(projectId, mergerequestId, duration) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/issues/${mId}/time_estimate`, {
      duration
    });
  }

  approve(projectId, mergerequestId, {
    sha
  }) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/merge_requests/${mId}/approve`, {
      sha
    });
  }

  approvals(projectId, {
    mergerequestId
  } = {}) {
    const pId = encodeURIComponent(projectId);
    const mergeRequest = mergerequestId ? `merge_requests/${encodeURIComponent(mergerequestId)}` : '';
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/${mergeRequest}/approvals`);
  }

  all(_ref = {}) {
    let {
      projectId
    } = _ref,
        options = (0, _objectWithoutProperties2.default)(_ref, ["projectId"]);
    const url = projectId ? `projects/${encodeURIComponent(projectId)}/merge_requests` : 'merge_requests';
    return _infrastructure.RequestHelper.get(this, url, options);
  }

  cancelOnPipelineSucess(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/merge_requests/${mId}/cancel_merge_when_pipeline_succeeds`);
  }

  changes(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/merge_requests/${mId}/changes`);
  }

  closesIssues(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/merge_requests/${mId}/closes_issues`);
  }

  commits(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/merge_requests/${mId}/commits`);
  }

  create(projectId, sourceBranch, targetBranch, title, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/merge_requests`, (0, _objectSpread2.default)({
      id: pId,
      sourceBranch,
      targetBranch,
      title
    }, options));
  }

  edit(projectId, mergerequestId, options) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/merge_requests/${mId}`, options);
  }

  editApprovals(projectId, _ref2) {
    let {
      mergerequestId
    } = _ref2,
        options = (0, _objectWithoutProperties2.default)(_ref2, ["mergerequestId"]);
    const pId = encodeURIComponent(projectId);
    const mergeRequest = mergerequestId ? `merge_requests/${encodeURIComponent(mergerequestId)}` : '';
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/${mergeRequest}approvals`, options);
  }

  editApprovers(projectId, _ref3) {
    let {
      mergerequestId
    } = _ref3,
        options = (0, _objectWithoutProperties2.default)(_ref3, ["mergerequestId"]);
    const pId = encodeURIComponent(projectId);
    const mergeRequest = mergerequestId ? `merge_requests/${encodeURIComponent(mergerequestId)}` : '';
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/${mergeRequest}approvers`, options);
  }

  remove(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/merge_requests/${mId}`);
  }

  resetSpentTime(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/merge_requests/${mId}/reset_spent_time`);
  }

  resetTimeEstimate(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/merge_requests/${mId}/reset_time_estimate`);
  }

  show(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/merge_requests/${mId}`);
  }

  timeStats(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/merge_requests/${mId}/time_stats`);
  }

  version(projectId, mergerequestId, versionId) {
    const [pId, mId, vId] = [projectId, mergerequestId, versionId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/merge_requests/${mId}/versions/${vId}`);
  }

  versions(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/merge_requests/${mId}/versions`);
  }

  unapprove(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/merge_requests/${mId}/approve`);
  }

  unsubscribe(projectId, mergerequestId) {
    const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/merge_requests/${mId}/unsubscribe`);
  }

}

var _default = MergeRequests;
exports.default = _default;