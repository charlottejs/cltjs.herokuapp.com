var RCSS = require('rcss');

var TRANSITION = {
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
};

var input = {
  display: 'none',
};

var label = {
  display: 'block',
};

var radioOuter = {
  backgroundColor: '#fff',
  border: '2px solid #000',
  borderRadius: '50%',
  height: '16px',
  width: '16px',
  display: 'inline-block',
  position: 'relative',
  verticalAlign: 'middle',
};

var radioInner = RCSS.cascade({
  position: 'absolute',
  backgroundColor: '#FFF',
  height: '16px',
  width: '16px',
  borderRadius: '50%',
  left: '-2px',
  top: '-2px',
  transform: 'scale(0)',
  WebkitTransform: 'scale(0)',
}, TRANSITION);

var radioInnerActive = RCSS.cascade(radioInner, {
  backgroundColor: '#000',
  borderColor: '#000',
  transform: 'scale(0.5)',
  WebkitTransform: 'scale(0.5)',
});

var text = RCSS.cascade(TRANSITION, {
  color: '#888',
  display: 'inline-block',
  paddingLeft: '0.333em',
  verticalAlign: 'middle',
});

var textActive = RCSS.cascade(text, {
  color: '#333',
});

module.exports = {
  label: RCSS.registerClass(label),
  radioOuter: RCSS.registerClass(radioOuter),
  radioInner: RCSS.registerClass(radioInner),
  radioInnerActive: RCSS.registerClass(radioInnerActive),
  input: RCSS.registerClass(input),
  text: RCSS.registerClass(text),
  textActive: RCSS.registerClass(textActive),
};

