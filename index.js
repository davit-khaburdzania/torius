'use strict';

module.exports = Torius;

/**
 * options
 *   - host: TOR proxy host
 *   - port: TOR proxy port
 */
function Torius (options) {
  options = options || {};
  this.options = options;

  options.host = options.host || 'localhost';
  options.port = options.port || 9050;
};


/**
 * opt
 *   - url: request url
 *   - method: request method 
 *   - body: request body object, if method is POST
 *   - query: request query object, if method is GET
 *   - headers: headers object
 */
Torius.prototype.request = function (opt, done) {
  var Socks5ClientHttpAgent = require('socks5-http-client/lib/Agent');
  var request = require('request');
  
  var options = {
    url: opt.url,
    method: opt.method,
    agent: new Socks5ClientHttpAgent({ 
      socksHost: this.options.host,
      socksPort: this.options.port 
    })
  };

  if (opt.body) {
    options.json = opt.body;
  }

  if (opt.query) {
    options.qs = opt.query;
  }

  if (opt.headers) {
    options.headers = opt.headers;
  }

  request(options, done);
};


/**
 * url: request url
 * query: query data object
 */
Torius.prototype.get = function (url, query, done) {
  var options = {
    url: url,
    method: 'GET',
    query: query
  };

  this.request(options, done);
};


/**
 * url: request url
 * body: body data object
 */
Torius.prototype.post = function (url, body, done) {
  var options = {
    url: url,
    method: 'POST',
    body: body
  };

  this.request(options, done);
};


