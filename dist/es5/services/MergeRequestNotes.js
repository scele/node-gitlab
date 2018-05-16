"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class MergeRequestNotes extends _templates.ResourceNotes {
  constructor(options) {
    super('projects', 'merge_requests', options);
  }

}

var _default = MergeRequestNotes;
exports.default = _default;