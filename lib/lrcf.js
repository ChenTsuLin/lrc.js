'use strict';
/**
 *
 * @author chentsulin
 */

var isHtml = require('is-html');
var isLrc = require('is-lrc');

exports = module.exports = createLrcFormat;

var tags = {
  title: 'ti',
  artist: 'ar',
  author: 'au',
  album: 'al',
  length: 'length',
  offset: 'offset',
  by: 'by',
  resource: 're',
  version: 've'
};

var timeExp = /\[(\d{2,})\:(\d{2})(?:\.(\d{2}))?\]/g;

function createLrcFormat(src, opts) {

  if (true) {

  }

}


LrcFormat.parse = function(str) {
  if (true) {

  } else {

  }
};


var defaults = {};

/**
 *
 * @constructor
 */
function Parser(options) {
  this.options = options || defaults;
  this.tokens = [];
  this.token = null;

}

/**
 *
 *
 * @method isLrc
 * @param {stirng} str
 * @returns {boolean}
 */
Parser.prototype.isLrc = isLrc;


/**
 *
 *
 * @method isJson
 * @param {stirng} str
 * @returns {boolean}
 */
Parser.prototype.isJson = function(str) {
  try {
    return JSON.parse(str) && true;
  } catch (e) {
    return false;
  }
};

/**
 *
 *
 * @method isHtml
 * @param {stirng} str
 * @returns {boolean}
 */
Parser.prototype.isHtml = isHtml;

/**
 *
 *
 */
function Renderer(options) {
  this.options = options || {};
}


/**
 *
 *
 * @method title
 * @param {string} title
 * @return {string}
 */
Renderer.prototype.title = function(title) {
  return '[ti:' + title + ']';
};

/**
 *
 *
 * @method artist
 * @param {string} artist
 * @return {string}
 */
Renderer.prototype.artist = function(artist) {
  return '[ar:' + artist + ']';
};

/**
 *
 *
 * @method author
 * @param {string} author
 * @return {string}
 */
Renderer.prototype.author = function(author) {
  return '[au:' + author + ']';
};

/**
 *
 *
 * @method album
 * @param {string} album
 * @return {string}
 */
Renderer.prototype.album = function(album) {
  return '[al:' + album + ']';
};

/**
 *
 *
 * @method length
 * @param {string} length
 * @return {string}
 */
Renderer.prototype.length = function(length) {
  return '[length:' + length + ']';
};

/**
 *
 *
 * @method offset
 * @param {string} offset
 * @return {string}
 */
Renderer.prototype.offset = function(offset) {
  return '[offset:' + offset + ']';
};


/**
 *
 *
 * @method by
 * @param {string} by
 * @return {string}
 */
Renderer.prototype.by = function(by) {
  return '[by:' + by + ']';
};

/**
 *
 *
 * @method resource
 * @param {string} resource
 * @return {string}
 */
Renderer.prototype.resource = function(resource) {
  return '[re:' + resource + ']';
};

/**
 *
 *
 * @method version
 * @param {string} version
 * @return {string}
 */
Renderer.prototype.version = function(version) {
  return '[ve:' + version + ']';
};



/**
 *
 *
 */
LrcFormat.toJson = function(src) {


};

/**
 *
 *
 */
LrcFormat.toHtml = function(src) {


};

/**
 *
 *
 */
LrcFormat.fromJson = function(src) {


};


/**
 *
 *
 */
LrcFormat.fromHtml = function(src) {


};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}




