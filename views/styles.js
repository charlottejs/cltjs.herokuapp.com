var RCSS = require('rcss');
var extendStyle = require('./../lib/extendStyle');
var floaterStyles = require('./components/floater/styles');
var COLOR = '#0069c4';

extendStyle(floaterStyles, 'textfield', {
  borderBottomColor: 'blue',
});

var button = {
  background: 'transparent',
  border: '2px solid ' + COLOR,
  borderRadius: '0.5em',
  color: COLOR,
  fontSize: '1.333em',
  marginTop: '1.333em',
  padding: '0.5em 1.5em',
  transition: 'all 0.3s ease-in',
  ':hover': {
    background: COLOR,
    color: '#fff',
  },
  ':focus': {
    background: COLOR,
    color: '#fff',
  },
};

module.exports = {
  button: RCSS.registerClass(button),
};
