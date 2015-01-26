var RCSS = require('rcss');

var block = {
  height: '100%',
  width: '100%',
  paddingLeft: '24px',
  paddingRight: '24px',
};

var title = {
  fontSize: '24px',
  margin: 0,
  letterSpacing: '0px',
  fontWeight: 400,
  color: 'rgba(255, 255, 255, 0.87)',
  paddingTop: 0,
  lineHeight: '64px',
  display: 'inline-block',
};

module.exports = {
  block: RCSS.registerClass(block),
  title: RCSS.registerClass(title),
};

