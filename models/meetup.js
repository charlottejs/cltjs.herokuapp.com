require('es6-promise').polyfill();
require('isomorphic-fetch');

var json = function(resp) { return resp.json(); }
var invoke = function(fn) {
  if (typeof fn !== 'function') return;
  fn.apply(null, Array.prototype.slice.call(arguments, 1));
}

var namesCache = [];

var MEETUP_API_KEY = process.env.MEETUP_API_KEY;
var MEETUP_GROUP_ID = process.env.MEETUP_GROUP_ID;

function getNames(url, __results, callback) {
  fetch(url, {method: 'GET'})
  .then(json)
  .then(function(resp) {
    if (resp.meta.next) {
      return getNames(resp.meta.next, __results.concat(resp.results), callback);
    }
    var results = __results.concat(resp.results);

    namesCache = results.map(function(n) { return  n.name; });
    console.log('There are %s members in CharlotteJS', namesCache.length);
    invoke(callback, null, namesCache);
  }, function(err) {
    // TODO: handle errors on this
    console.error('err', err);
  }).catch(function(err) {
    // TODO: handle errors on this
    console.error('catch', err);
  });
}

module.exports = {
  names: function(callback) {
    if (namesCache.length > 0)
      return process.nextTick(function() {
        invoke(callback, null, namesCache);
      });

    getNames(
      'https://api.meetup.com/2/members?key=' + MEETUP_API_KEY + '&group_id=' + MEETUP_GROUP_ID + '&page=1000',
      [],
      callback
    );
  },

  validateName: function(name, callback) {
    this.names(function(err, names) {
      // TODO: handle error state
      if (names.some(function(n) { return n.toLowerCase() === name.toLowerCase() }))
        return invoke(callback, null, true);

      invoke(callback, null, false);
    })
  },
};

// prepopulate this cache on startup
module.exports.names();

