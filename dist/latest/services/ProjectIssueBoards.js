"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class ProjectIssueBoards extends _templates.ResourceIssueBoards {
  constructor(options) {
    super('products', options);
  }

}

var _default = ProjectIssueBoards;
exports.default = _default;