var RCSS = require('rcss');

var TRANSITION = {
  '-webkit-transition': 'all 1s ease-in',
  transition: 'all 0.333s ease-out',
};

var BASE = RCSS.cascade(TRANSITION, {
  height: '100%',
  width: '100%',
  margin: '0 auto 64px',
  marginBottom: '48px',
});

var depth0 = {};
var depth1 = {boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.24)'};
var depth2 = {boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.23)'};
var depth3 = {boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.23)'};
var depth4 = {boxShadow: '0px 10px 18px rgba(0, 0, 0, 0.22)'};
var depth5 = {boxShadow: '0px 15px 20px rgba(0, 0, 0, 0.22)'};

var depthBottom0 = {};
var depthBottom1 = {boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12)'};
var depthBottom2 = {boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.16)'};
var depthBottom3 = {boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.23)'};
var depthBottom4 = {boxShadow: '0px 14px 45px rgba(0, 0, 0, 0.25)'};
var depthBottom5 = {boxShadow: '0px 19px 60px rgba(0, 0, 0, 0.3)'};

var rounded = {borderRadius: '2px'};
var circle = {borderRadius: '50%'};

module.exports = {
  TRANSITION: RCSS.registerClass(TRANSITION),
  BASE: RCSS.registerClass(BASE),
  depth0: RCSS.registerClass(depth0),
  depth1: RCSS.registerClass(depth1),
  depth2: RCSS.registerClass(depth2),
  depth3: RCSS.registerClass(depth3),
  depth4: RCSS.registerClass(depth4),
  depth5: RCSS.registerClass(depth5),
  depthBottom0: RCSS.registerClass(depthBottom0),
  depthBottom1: RCSS.registerClass(depthBottom1),
  depthBottom2: RCSS.registerClass(depthBottom2),
  depthBottom3: RCSS.registerClass(depthBottom3),
  depthBottom4: RCSS.registerClass(depthBottom4),
  depthBottom5: RCSS.registerClass(depthBottom5),
  rounded: RCSS.registerClass(rounded),
  circle: RCSS.registerClass(circle),
};

