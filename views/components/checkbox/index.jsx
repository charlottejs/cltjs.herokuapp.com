var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var css = require('./styles');

var TEXT_CLASSNAME = 'text';
var BOX_CLASSNAME = 'checkboxBox';
var CHECK_CLASSNAME = 'checkboxCheck';
var className = (c, _) => _ ? `${c}Checked` : c;
var getTextClassname = className.bind(null, TEXT_CLASSNAME);
var getBoxClassname = className.bind(null, BOX_CLASSNAME);
var getCheckClassname = className.bind(null, CHECK_CLASSNAME);

var Checkbox = React.createClass({
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
        <div className={css.checkboxOuter.className}>
          <input
            {...rest}
            type="checkbox"
            ref="input"
            onChange={onChange}
            className={css.input.className}
            value={value}
            name={name}
            id={id}
            checked={checked} />
          <span className={css[getBoxClassname(checked)].className}></span>
          <span className={css[getCheckClassname(checked)].className}></span>
        </div>
        <span className={css[getTextClassname(checked)].className}>{this.props.children}</span>
      </label>
    );
  }
});

module.exports = Checkbox;

