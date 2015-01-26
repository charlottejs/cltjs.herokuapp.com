var React = require('react');
var css = require('./styles');

var Button = React.createClass({
  render() {
    return (
      <button className={css.button.className} type="submit">
        {this.props.children}
      </button>
    );
  }
});

module.exports = Button;

