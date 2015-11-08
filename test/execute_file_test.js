var expect = require('chai').expect;
var executeFile = require('../lib/execute_file');

describe("execute_file", function() {
  describe("_compileTemplate", function() {
    it("compiles template", function(done) {
      var options = {greetings: 'hello world'};
      executeFile._compileTemplate('./test/fixtures/sample.sh', options, function (err, content) {
        expect(err).to.equal(null);
        expect(content).to.equal('echo hello world\n');
        done();
      });
    });
  });
});
