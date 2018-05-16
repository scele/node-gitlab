"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _humps = _interopRequireDefault(require("humps"));

var _parseLinkHeader = _interopRequireDefault(require("parse-link-header"));

var _qs = _interopRequireDefault(require("qs"));

var _urlJoin = _interopRequireDefault(require("url-join"));

var _request = _interopRequireDefault(require("request"));

function defaultRequest({
  url,
  useXMLHttpRequest
}, endpoint, {
  headers,
  body,
  qs,
  formData,
  resolveWithFullResponse = false
}) {
  const params = {
    url: (0, _urlJoin.default)(url, endpoint),
    headers,
    json: true
  };
  if (body) params.body = _humps.default.decamelizeKeys(body);

  if (qs) {
    if (useXMLHttpRequest) {
      // The xhr package doesn't have a way of passing in a qs object until v3
      params.url = (0, _urlJoin.default)(params.url, `?${_qs.default.stringify(_humps.default.decamelizeKeys(qs))}`);
    } else params.qs = _humps.default.decamelizeKeys(qs);
  }

  if (formData) params.formData = formData;
  params.resolveWithFullResponse = resolveWithFullResponse;
  return params;
}

function getStream(service, endpoint, options = {}) {
  if (service.useXMLHttpRequest) {
    throw new Error('Cannot use streaming functionality with XMLHttpRequest. Please instantiate without this option to use streaming');
  }

  const requestOptions = defaultRequest(service, endpoint, {
    headers: service.headers,
    qs: options
  });
  return _request.default.get(requestOptions);
}

function getPaginated(_x, _x2) {
  return _getPaginated.apply(this, arguments);
}

function _getPaginated() {
  _getPaginated = (0, _asyncToGenerator2.default)(function* (service, endpoint, options = {}) {
    const requestOptions = defaultRequest(service, endpoint, {
      headers: service.headers,
      qs: options,
      resolveWithFullResponse: true
    });
    const response = yield service.requester.get(requestOptions);
    const links = (0, _parseLinkHeader.default)(response.headers.link) || {};
    const page = response.headers['x-page'];
    const underMaxPageLimit = options.maxPages ? page < options.maxPages : true; // If not looking for a singular page and still under the max pages limit AND their is a next page, paginate

    if (!options.page && underMaxPageLimit && links.next) {
      const more = yield getPaginated(service, links.next.url.replace(service.url, ''), options);
      return [...response.body, ...more];
    }

    return response.body;
  });
  return _getPaginated.apply(this, arguments);
}

class RequestHelper {
  static get(service, endpoint, options = {}, {
    stream = false
  } = {}) {
    return (0, _asyncToGenerator2.default)(function* () {
      if (stream) return getStream(service, endpoint, options);
      return getPaginated(service, endpoint, options);
    })();
  }

  static post(service, endpoint, options = {}, form = false) {
    const body = form ? 'fromData' : 'body';
    return service.requester.post(defaultRequest(service, endpoint, {
      headers: service.headers,
      [body]: options
    }));
  }

  static put(service, endpoint, options = {}) {
    return service.requester.put(defaultRequest(service, endpoint, {
      headers: service.headers,
      body: options
    }));
  }

  static delete(service, endpoint, options = {}) {
    return service.requester.delete(defaultRequest(service, endpoint, {
      headers: service.headers,
      qs: options
    }));
  }

}

var _default = RequestHelper;
exports.default = _default;