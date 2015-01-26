var React = require('react');
var BaseLayout = require('./../layouts/base.jsx');
var css = require('../styles');
var Header = require('../components/header/index.jsx');
var Paper = require('../components/paper/index.jsx');
var Floater = require('../components/floater/index.jsx');
var Checkbox = require('../components/checkbox/index.jsx');

var Home = React.createClass({
  getDefaultProps() {
    // rehydrate
    if (typeof window === 'undefined') {
      return {};
    }

    var props = window.__rehydration;
    delete window.__rehydration;
    return props;
  },

  getInitialState() {
    return {
      depth: 2,
      rounded: false,
      'topic[]': ['clojurescript'],
    };
  },

  onChange(e) {
    var {name, value, type, checked} = e.target;

    var o = {};
    if (type === 'radio' && this.state[name] === value) value = '';

    if (type === 'checkbox') {
      var arr = this.state[name];
      var index = arr.indexOf(value);
      if (index === -1) value = arr.concat(value);
      else{
        value = arr.slice(0, index)
          .concat(arr.slice(index + 1, arr.length));
      }
    }

    o[name] = value;
    this.setState(o);
  },

  render() {
    var {depth, rounded} = this.state;
    var topics = {
      clojurescript: 'ClojureScript',
      modules: 'Module Systems. AMD, CJS, ES6',
      offline: 'Offline Series',
      antiangular: 'Anti-angular',
      react: 'React',
      ember: 'Ember',
      animations: 'JavaScript Animations',
      drawing: 'Drawing in JS',
      games: 'Game Development',
    };

    return (
      <BaseLayout module="home" rehydration={this.props}>
        <Header color="#0069c4" title="Vote for 2015 Topics" />
        <Paper depth={depth} rounded={rounded} style={{padding: '16px'}}>
          <form>
            {Object.keys(topics).map(k => (
              <Checkbox key={k} checked={this.state['topic[]'].indexOf(k) > -1} name="topic[]" onChange={this.onChange} value={k}>
                {topics[k]}
              </Checkbox>
            ))}
            <Checkbox checked={this.state['topic[]'].indexOf('other') > -1} name="topic[]" onChange={this.onChange} value="other">
              <Floater name="other" label="Other..." />
            </Checkbox>
            <button className={css.button.className} type="submit">submit</button>
          </form>
        </Paper>
      </BaseLayout>
    );
  }
});

module.exports = Home;
