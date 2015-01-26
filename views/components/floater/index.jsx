var React = require('react');
var css = require('./styles');

var getLabelSelector = v => v ? 'label__hasContent' : 'label';

var Floater = React.createClass({
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

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e);
    }
  },

  componentDidMount() {
    // in case the browser saved state on a refresh
    var domValue = this.refs.input.getDOMNode().value;
    if (domValue !== this.state.value) {
      this.setState({
        value: domValue,
        labelSelector: getLabelSelector(domValue)
      });
    }
  },

  render() {
    var {label, id, ...rest} = this.props;
    if (typeof id === 'undefined' && typeof label === 'string') id = label.replace(/\s+/, '-');
    var {value} = this.state;

    return (
      <div className={css.fieldset.className}>
        <label
          className={css[getLabelSelector(value)].className}
          htmlFor={id}>{label}</label>
        <this.props.input
          ref="input"
          {...rest}
          onChange={this.handleChange}
          className={css.textfield.className}
          name={id}
          id={id}
          placeholder={label}
          value={value} />
      </div>
    );
  }
});

module.exports = Floater;
