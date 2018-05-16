"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class Jobs extends _infrastructure.BaseService {
  all(projectId, options = {}) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/jobs`, options);
  }

  show(projectId, jobId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/jobs/${jobId}`);
  }

  play(projectId, jobId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/jobs/${jobId}/play`);
  }

  downloadSingleArtifactFile(projectId, jobId, artifactPath, {
    stream
  }) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/jobs/${jobId}/artifacts/${artifactPath}`, {}, {
      stream
    });
  }

  showPipelineJobs(projectId, pipelineId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/pipelines/${pipelineId}/jobs`, options);
  }

}

var _default = Jobs;
exports.default = _default;