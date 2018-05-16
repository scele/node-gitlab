"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class EpicNotes extends _templates.ResourceNotes {
  constructor(options) {
    super('groups', 'epics', options);
  }

}

var _default = EpicNotes;
exports.default = _default;