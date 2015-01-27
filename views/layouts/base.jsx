var React = require('react');

require('es6-promise').polyfill();
require('isomorphic-fetch');

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
          <link rel="shortcut icon" href="/public/images/icon-29.png" />
          <link rel="stylesheet" href="/public/css/all.css" />
          <script async dangerouslySetInnerHTML={{__html: 'var __rehydration = ' + JSON.stringify(this.props.rehydration) + ';'}}></script>
          {/*process.env.NODE_ENV === 'production' ? <script src="/public/js/common.js"></script> : null*/}
          <script async src={`/public/js/${this.props.module}.js`}></script>

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="CltJS" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link href="/public/images/icon-76@2x.png" sizes="152x152" rel="apple-touch-icon" />
          <link href="/public/images/icon-60@2x.png" sizes="120x120" rel="apple-touch-icon" />
          <link href="/public/images/icon-76.png" sizes="76x76" rel="apple-touch-icon" />

          <link href="/public/images/apple-touch-startup-image-1536x2008.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/public/images/apple-touch-startup-image-1496x2048.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/public/images/apple-touch-startup-image-768x1004.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image" />
          <link href="/public/images/apple-touch-startup-image-748x1024.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image" />
          <link href="/public/images/apple-touch-startup-image-640x1096.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/public/images/apple-touch-startup-image-640x920.png" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/public/images/apple-touch-startup-image-320x460.png" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image" />
        </head>
        <body>
          {this.props.children}
          <script dangerouslySetInnerHTML={{__html: "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-58998805-1', 'auto');ga('send', 'pageview');"}}></script>
        </body>
      </html>
    );
  }
});

module.exports = Layout;
