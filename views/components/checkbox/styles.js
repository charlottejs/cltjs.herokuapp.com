var RCSS = require('rcss');

var TRANSITION = {
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
};

var input = {
  display: 'none',
};

var label = {
  display: 'block',
  padding: '0.1666em 0',
};

var checkboxOuter = {
  display: 'inline-block',
  height: '18px',
  paddingRight: '0.33em',
  position: 'relative',
  verticalAlign: 'middle',
  width: '18px',
};

var checkboxBox = RCSS.cascade(TRANSITION, {
  backgroundColor: '#FFF',
  border: '2px solid #888',
  borderRadius: '3px',
  boxSizing: 'border-box',
  height: '18px',
  position: 'absolute',
  transform: 'rotate(0deg) scale(1)',
  transformOrigin: '40% 90% 0px',
  WebkitTransform: 'rotate(0deg) scale(1)',
  WebkitTransformOrigin: '40% 90% 0px',
  width: '18px',
});

var checkboxBoxChecked = RCSS.cascade(checkboxBox, {
  transform: 'rotate(45deg) scale(0)',
  WebkitTransform: 'rotate(45deg) scale(0)',
});

var checkboxCheck = RCSS.cascade(TRANSITION, {
  borderBottom: '2px solid #008000',
  borderLeft: '2px solid #008000',
  bottom: '4px',
  height: '10px',
  left: '4px',
  position: 'absolute',
  transform: 'rotate(-45deg) scale(0)',
  transformOrigin: '40% 100% 0px',
  WebkitTransform: 'rotate(-45deg) scale(0)',
  WebkitTransformOrigin: '40% 100% 0px',
  width: '10px',
});

var checkboxCheckChecked = RCSS.cascade(checkboxCheck, {
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0.1s',
  height: '10px',
  transform: 'rotate(-45deg) scale(1)',
  WebkitTransform: 'rotate(-45deg) scale(1)',
  width: '18px',
});

var text = RCSS.cascade(TRANSITION, {
  color: '#888',
  display: 'inline-block',
  paddingLeft: '0.333em',
  verticalAlign: 'middle',
});

var textChecked = RCSS.cascade(text, {
  color: '#333',
});

module.exports = {
  label: RCSS.registerClass(label),
  checkboxOuter: RCSS.registerClass(checkboxOuter),
  checkboxBox: RCSS.registerClass(checkboxBox),
  checkboxBoxChecked: RCSS.registerClass(checkboxBoxChecked),
  checkboxCheck: RCSS.registerClass(checkboxCheck),
  checkboxCheckChecked: RCSS.registerClass(checkboxCheckChecked),
  input: RCSS.registerClass(input),
  text: RCSS.registerClass(text),
  textChecked: RCSS.registerClass(textChecked),
};

