var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var server = require('../');

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

describe('home page', function () {
  it('renders', function (done) {
    var options = {
      method: "GET",
      url: "/"
    };

    server.inject(options, function(response) {
      var result = response.result;
      expect(response.statusCode).to.equal(200);

      done();
    });
  });
});
