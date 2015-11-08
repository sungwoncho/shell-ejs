# shell-ejs

[![Build Status](https://travis-ci.org/sungwoncho/shell-ejs.svg?branch=master)](https://travis-ci.org/sungwoncho/shell-ejs)

Write and execute shell scripts with ejs.


## Install

    npm install shell-ejs


## Usage

```js
var shellEjs = require('shell-ejs');

var variables = {
  host: 'http://my.domain.com',
  port: 3000
};
shellEjs.executeFile('./deploy.sh', variables, function (err, stdout, stderr) {
  // Do something
})
```


## License

MIT
