var RCSS = require('rcss');
var fs = require('fs');
var path = require('path');
var glob = require('glob');
var ROOT = path.join(__dirname, '..', 'styles');

var normalize = fs.readFileSync(path.join(ROOT, 'normalize.css'));
var base = fs.readFileSync(path.join(ROOT, 'base.css'));
var files = glob.sync('./views/**/styles.js')
require('mkdirp')(path.join(__dirname, '..', 'public', 'css'));

if (process.env.NODE_ENV !== 'production') {
  files.forEach(function(file) {
    fs.watchFile(file, {}, function() {
      console.log('building styles');
      buildStyles()
    });
  });
  fs.watch(ROOT, {}, buildStyles);
}

files = files.map(function(f) { return './.' + f; });

// fill up RCSS's registry
function buildStyles() {
  Object.keys(require.cache).forEach(function(key) {
    delete require.cache[key];
  });
  files.forEach(require);

  var app = RCSS.getStylesString()
  console.log('Writing public/css/all.css');
  fs.writeFileSync('public/css/all.css', [normalize,base,app].join('\n'));
}

buildStyles();
