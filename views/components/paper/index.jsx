var React = require('react');
var css = require('./styles');

var _css = (depth, rounded, circle, bottom) => (
  css.BASE.className + ' ' +
  (bottom ?
    css[`depthBottom${depth}`].className :
    css[`depth${depth}`].className)
    + ' ' +
  (rounded ? css.rounded.className : ' ') +
  (circle ? css.circle.className : ' ')
);

var Paper = React.createClass({
  getDefaultProps() {
    return {
      depth: 1,
      rounded: true,
      circle: false,
    };
  },

  render() {
    var {depth, rounded, circle, children, ...props} = this.props;
    // TODO: invariant for range

    return (
      <div className={_css(depth, rounded, circle)}>
        <div {...props} className={_css(depth, rounded, circle, 'Bottom')}>
          {children}
        </div>
      </div>
    );
  }
});

module.exports = Paper;

