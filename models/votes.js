var invoke = function(fn) {
  if (typeof fn !== 'function') return;
  console.log(Array.prototype.slice.call(arguments, 1));
  fn.apply(null, Array.prototype.slice.call(arguments, 1));
}

module.exports = {
  save: function(plugin, data, callback) {
    var db = plugin.db;
    var votes = db.collection('votes');

    votes.update({name: data.name}, data, {upsert: true, w: 1}, function(err, result) {
      if (err) return reply(Boom.internal('Internal MongoDB error', err));
      invoke(callback, result);
    });
  },

  totals: function(plugin, callback) {
    var db = plugin.db;
    var votes = db.collection('votes');

    votes.find({}).toArray(function(err, result) {
      if (err) return reply(Boom.internal('Internal MongoDB error', err));
      var counts = result.reduce(function(memo, c) {
        c.topic.forEach(function(t) {
          if (typeof memo[t] === 'undefined') memo[t] = 0;

          memo[t] = memo[t] + 1;
        });

        return memo;
      }, {});

      invoke(callback, counts);
    });
  },

  totalsGroupedByName: function(plugin, callback) {
    var db = plugin.db;
    var votes = db.collection('votes');

    votes.find({}).toArray(function(err, result) {
      if (err) return reply(Boom.internal('Internal MongoDB error', err));
      var counts = result.reduce(function(memo, c) {
        memo[c.name] = c.topic;
        if (c.other) c.topic.push(c.other);

        return memo;
      }, {});

      invoke(callback, counts);
    });
  },
};

