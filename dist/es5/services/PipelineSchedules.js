"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _infrastructure = require("../infrastructure");

class PipelineSchedules extends _infrastructure.BaseService {
  all(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/pipeline_schedules`, options);
  }

  create(projectId, description, ref, cron, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/pipeline_schedules`, (0, _objectSpread2.default)({
      description,
      ref,
      cron
    }, options));
  }

  edit(projectId, scheduleId, options) {
    const [pId, sId] = [projectId, scheduleId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/pipeline_schedules/${sId}`, options);
  }

  remove(projectId, scheduleId) {
    const [pId, sId] = [projectId, scheduleId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/pipeline_schedules/${sId}`);
  }

  show(projectId, scheduleId) {
    const [pId, sId] = [projectId, scheduleId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/pipeline_schedules/${sId}`);
  }

  takeOwnership(projectId, scheduleId) {
    const [pId, sId] = [projectId, scheduleId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/pipeline_schedules/${sId}/take_ownership`);
  }

}

var _default = PipelineSchedules;
exports.default = _default;