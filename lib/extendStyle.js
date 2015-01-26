var assert = require('assert');
var defined = function(a) { return typeof a !== 'undefined'; };
var RCSS = require('rcss');

module.exports = function(o, selector, props) {
  var s = o[selector];
  assert(defined(s.className) && defined(s.style), 'Not a valid RCSS object');

  Object.keys(props).forEach(function(p) {
    s.style[p] = props[p];
  });

  RCSS.registerClass(o[selector].style);
  //return o[selector].textfi
};
