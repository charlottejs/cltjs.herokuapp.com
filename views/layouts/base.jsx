var React = require('react');

var Layout = React.createClass({

  getDefaultProps() {
    return {section: 'what'};
  },

  render() {
    var {section} = this.props;
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>{`CharlotteJS. ${section}`}</title>
          <meta description="topic voting for CharlotteJS 2015" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/public/css/all.css" />
        </head>
        <body>
          {this.props.children}
          <script dangerouslySetInnerHTML={{__html: 'var __rehydration = ' + JSON.stringify(this.props.rehydration) + ';'}}></script>
          {process.env.NODE_ENV === 'production' ? <script src="/public/js/common.js"></script> : null}
          <script src={`/public/js/${this.props.module}.js`}></script>
          <script dangerouslySetInnerHTML={{__html: "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-xxxxxxxx-x', 'auto');ga('send', 'pageview');"}}></script>
        </body>
      </html>
    );
  }
});

module.exports = Layout;
