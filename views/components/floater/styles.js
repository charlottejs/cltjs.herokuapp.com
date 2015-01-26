var RCSS = require('rcss');

var INPUT_BASE = {
  display: 'block',
  verticalAlign: 'top',
};

var fieldset = {
  padding: '0 0',
  position: 'relative',
};

var label = RCSS.cascade(INPUT_BASE, {
  fontSize: '0.666em',
  fontWeight: 300,
  position: 'absolute',
  top: '2.23em',
  left: '1rem',
  opacity: 0,
  top: '1.5em',
  transition: '0.333s ease top, 0.333s ease opacity',
});

var label__hasContent = RCSS.cascade(label, {
  opacity: 1,
  top: '0.4rem',
});

var textfield = RCSS.cascade(INPUT_BASE, {
  background: 'transparent',
  border: 0,
  borderBottom: '2px solid #777',
  padding: '1.333em 1em 0.5em 1em',
  width: '100%',
  transition: 'all 0.3s ease-in',
  ':focus': {
    background: '#fafafa',
    outline: 0,
    borderBottomColor: '#333',
  },
});

var successMessage = {
  background: '#41A094',
  color: '#fff',
  fontSize: '1.3333em',
  padding: '2em',
  borderBottom: '2px solid #565656',
  marginBottom: '14em',
};

var errorMessage = {
  background: '#ea5a4b',
  border: 0,
  color: '#fff',
  padding: '0.3333em 0.666em'
};

var lastErrorMessage = RCSS.cascade(errorMessage, {
  borderBottom: '2px solid #ce2d1c'
});

var button = {
  background: '#fafafa',
  border: 0,
  borderTop: '1px solid #e9e9e9',
  borderBottom: '2px solid #444',
  color: '#000',
  marginTop: '1.333em',
  fontSize: '1.333em',
  padding: '0.5em 1.5em',
};

module.exports = {
  fieldset: RCSS.registerClass(fieldset),
  label: RCSS.registerClass(label),
  label__hasContent: RCSS.registerClass(label__hasContent),
  successMessage: RCSS.registerClass(successMessage),
  errorMessage: RCSS.registerClass(errorMessage),
  lastErrorMessage: RCSS.registerClass(lastErrorMessage),
  textfield: RCSS.registerClass(textfield),
  button: RCSS.registerClass(button),
};

