var React = require('react');
var css = require('./styles');

var getLabelSelector = v => v ? 'label__hasContent' : 'label';

var Floater = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
  },

  getInitialState() {
    return {
      value: this.props.initialValue,
      labelSelector: getLabelSelector(this.props.initialValue),
    };
  },

  getDefaultProps() {
    return {input: 'input'};
  },

  handleChange(e) {
    var {value} = e.target;
    var labelClass = getLabelSelector(value);
    this.setState({value, labelClass});

    this.props.onChange(e);
  },

  componentDidMount() {
    // in case the browser saved state on a refresh
    var domValue = this.refs.input.getDOMNode().value;
    if (domValue !== this.state.value) {
      this.setState({
        value: domValue,
        labelSelector: getLabelSelector(domValue)
      });
      this.props.onChange({
        target: this.refs.input.getDOMNode(),
        value: domValue
      });
    }
  },

  render() {
    var {children, id, name, ...rest} = this.props;
    if (typeof id === 'undefined') {
      if (typeof name === 'string') id = name.replace(/\s+/, '-');
      else id = children.replace(/\s+/, '-').toLowerCase();
    }
    var {value} = this.state;

    return (
      <div className={css.fieldset.className}>
        <label
          className={css[getLabelSelector(value)].className}
          htmlFor={id}>{children}</label>
        <this.props.input
          ref="input"
          {...rest}
          onChange={this.handleChange}
          className={css.textfield.className}
          name={name}
          id={id}
          placeholder={children}
          value={value} />
      </div>
    );
  }
});

module.exports = Floater;
