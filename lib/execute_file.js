var fs = require('fs');
var ejs = require('ejs');
var exec = require('child_process').exec;

var executeFile = module.exports;

executeFile._compileTemplate = function (path, variables, done) {
  fs.readFile(path, {encoding: 'utf8'}, function (err, data) {
    if (err) {
      return done(err);
    }

    // Allow to call without variables
    if (typeof variables === 'function') {
      done = variables;
      variables = {};
    }

    var options = variables || {};
    var content = ejs.render(data, options);
    done(null, content);
  });
};

executeFile.run = function (path, variables, done) {
  executeFile._compileTemplate(path, variables, function (err, code) {
    if (err) {
      return done(err);
    }

    exec(code, done);
  });
};
