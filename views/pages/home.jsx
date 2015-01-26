var React = require('react');
var BaseLayout = require('./../layouts/base.jsx');
var css = require('../styles');
var Button = require('../components/button/index.jsx');
var Header = require('../components/header/index.jsx');
var Paper = require('../components/paper/index.jsx');
var Floater = require('../components/floater/index.jsx');
var Checkbox = require('../components/checkbox/index.jsx');

var status = (resp) => (
  ((resp.statusCode >= 200 && resp.statusCode < 300) || typeof resp.statusCode === 'undefined') ?
    Promise.resolve(resp) :
    Promise.reject(resp)
);
var toJSON = resp => resp.json();
var ignoreError = e => e.match(/allowed to be empty/);

var TOPICS = {
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

  componentDidMount() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('2015-votes')) {
      var s = JSON.parse(localStorage.getItem('2015-votes'));
      if (s.name) var hideName = true;
      this.setState({
        hideName: hideName,
        name: s.name,
        'topic[]': s.topic,
        other: s.other,
      });
    }
  },

  getInitialState() {
    return {
      depth: 2,
      rounded: false,
      'name': '',
      'topic[]': [],
      'other': '',
      // extract from rehydration
      message: this.props.message,
      errors: [],
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

  onSubmit(e) {
    e.preventDefault();
    var node = e.target;
    var {action, method} = node;
    this.setState({errors: []});
    var body = JSON.stringify({
      name: this.state.name,
      topic: this.state['topic[]'],
      other: this.state.other,
      // new FormData(node),
    });

    localStorage.setItem('2015-votes', body);

    fetch(action, {
      method: method,
      body: body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(toJSON)
    .then(status)
    .then(json => this.setState({message: json.message}))
    .catch(err => this.setState({errors: err.message.split('. ').filter(ignoreError)}));
  },

  renderForm() {
    if (this.state.message) {
      return (
        <div>{this.state.message}</div>
      );
    }

    return (
      <form action="/2015-topics" method="POST" onSubmit={this.onSubmit}>
        {this.state.errors.length > 0 && (
          <ul className={css.errorBlock.className}>
            {this.state.errors.map(e => <div key={e} className={css.error.className}>{e}</div>)}
          </ul>
        )}
        <Floater name="name" onChange={this.onChange} hidden={this.state.hideName}>Full name</Floater>
        <fieldset className={css.fieldset.className}>
          <p>Please select the topics you are most interested in.</p>
          {Object.keys(TOPICS).map(k => (
            <Checkbox key={k} checked={this.state['topic[]'].indexOf(k) > -1} name="topic[]" onChange={this.onChange} value={k}>
              {TOPICS[k]}
            </Checkbox>
          ))}
          <Checkbox checked={this.state['topic[]'].indexOf('other') > -1} name="topic[]" onChange={this.onChange} value="other">
            <Floater onChange={this.onChange} name="other" value={this.state['other']}>Other...</Floater>
          </Checkbox>
        </fieldset>
        <Button>submit</Button>
      </form>
    );
  },

  render() {
    var {depth, rounded} = this.state;

    return (
      <BaseLayout module="home" rehydration={this.props}>
        <Header color="#0069c4" title="Vote for 2015 Topics" />
        <Paper depth={depth} rounded={rounded} style={{padding: '16px'}}>
          {this.renderForm()}
        </Paper>
      </BaseLayout>
    );
  }
});

module.exports = Home;
