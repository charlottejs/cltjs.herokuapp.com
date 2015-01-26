var React = require('react');
var css = require('./styles');

var Header = React.createClass({
  render() {
    return (
      <header style={{backgroundColor: this.props.color}} className={css.block.className}>
        <h1 className={css.title.className}>{this.props.title}</h1>
        {/*TODO: left nav and right actions*/}
      </header>
    );
  }
});

module.exports = Header;

