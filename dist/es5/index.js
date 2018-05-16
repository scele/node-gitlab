"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime/core-js/object/define-property");

var _Object$keys = require("@babel/runtime/core-js/object/keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  GroupsBundle: true,
  UsersBundle: true,
  ProjectsBundle: true
};
exports.default = exports.ProjectsBundle = exports.UsersBundle = exports.GroupsBundle = void 0;

var _lodash = _interopRequireDefault(require("lodash.pick"));

var APIServices = _interopRequireWildcard(require("./services"));

_Object$keys(APIServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return APIServices[key];
    }
  });
});

var _infrastructure = require("./infrastructure");

// All seperatly
// Groups
const GroupsBundle = (0, _infrastructure.Bundler)((0, _lodash.default)(APIServices, ['Groups', 'GroupAccessRequests', 'GroupBadges', 'GroupCustomAttributes', 'GroupIssueBoards', 'GroupMembers', 'GroupMilestones', 'GroupProjects', 'GroupVariables', 'Epics', 'EpicIssues', 'EpicNotes', 'EpicDiscussions'])); // Users

exports.GroupsBundle = GroupsBundle;
const UsersBundle = (0, _infrastructure.Bundler)((0, _lodash.default)(APIServices, ['Users', 'UserCustomAttributes', 'UserEmails', 'UserImpersonationTokens', 'UserKeys', 'UserGPGKeys'])); // Projects

exports.UsersBundle = UsersBundle;
const ProjectsBundle = (0, _infrastructure.Bundler)((0, _lodash.default)(APIServices, ['Branches', 'Commits', 'DeployKeys', 'Deployments', 'Environments', 'Issues', 'IssueAwardEmojis', 'IssueNotes', 'IssueDiscussions', 'Jobs', 'Labels', 'MergeRequests', 'MergeRequestAwardEmojis', 'MergeRequestNotes', 'Pipelines', 'PipelineSchedules', 'PipelineScheduleVariables', 'Projects', 'ProjectAccessRequests', 'ProjectBadges', 'ProjectCustomAttributes', 'ProjectImportExport', 'ProjectIssueBoards', 'ProjectHooks', 'ProjectMembers', 'ProjectMilestones', 'ProjectSnippets', 'ProjectSnippetNotes', 'ProjectSnippetDiscussions', 'ProjectSnippetAwardEmojis', 'ProtectedBranches', 'ProjectVariables', 'Repositories', 'RepositoryFiles', 'Runners', 'Services', 'Tags', 'Triggers'])); // All initialized

exports.ProjectsBundle = ProjectsBundle;

var _default = (0, _infrastructure.Bundler)(APIServices);

exports.default = _default;