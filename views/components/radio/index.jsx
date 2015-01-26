var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var css = require('./styles');

var TEXT_CLASSNAME = 'text';
var INNER_CLASSNAME = 'radioInner';
var className = (c, _) => _ ? `${c}Active` : c;
var getTextClassname = className.bind(null, TEXT_CLASSNAME);
var getInnerClassname = className.bind(null, INNER_CLASSNAME);

var Radio = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    checked: React.PropTypes.bool,
    // children: React.PropTypes..isRequired,
  },

  render() {
    var {id, name, children, checked, onChange, value, ...rest} = this.props;
    if (typeof id === 'undefined') id = name.replace(/\s+/, '-') + value;

    return (
      <label
        className={css.label.className}
        htmlFor={id}>
        <div className={css.radioOuter.className}>
          <input
            {...rest}
            type="radio"
            ref="input"
            onChange={onChange}
            className={css.input.className}
            value={value}
            name={name}
            id={id}
            checked={checked} />
          <div className={css[getInnerClassname(checked)].className}></div>
        </div>
        <span className={css[getTextClassname(checked)].className}>{this.props.children}</span>
      </label>
    );
  }
});

module.exports = Radio;

