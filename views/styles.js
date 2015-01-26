var RCSS = require('rcss');
var extendStyle = require('./../lib/extendStyle');
var floaterStyles = require('./components/floater/styles');
var COLOR = '#0069c4';

extendStyle(floaterStyles, 'textfield', {
  borderBottomColor: COLOR,
});

var fieldset = {
  border: 0,
  padding: 0,
};

var errorBlock = {
  background: 'red',
  border: '1px solid red',
};

var error = {
  color: '#fff',
  padding: '0.333em 0.666em',
};

module.exports = {
  fieldset: RCSS.registerClass(fieldset),
  errorBlock: RCSS.registerClass(errorBlock),
  error: RCSS.registerClass(error),
};
