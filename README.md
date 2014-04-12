torius
======

Torius is simple module to work with TOR network

## Installation

```$ npm install torius```

## Examples

### request method
```js
var Torius = require('torius');
var torius = new Torius({ host: 'localhost', port: 9050 });

var options = {
  url: 'http://google.com',
  method: 'POST',
  body: {
    q: 'tor goes wild'
  }
}; 

torius.request(options, function (err, res, body) {
  console.log(err, res, body);
});
```

### get method
```js
var Torius = Helpers.tor;
var torius = new Torius();

var url = 'http://google.com';
var query = { q: 'tor' };

torius.get(url, query, function (err, res, body) {
  console.log(err, res, body);
});
```

### get method
```js
var Torius = Helpers.tor;
var torius = new Torius();

var url = 'http://google.com';
var body = { name: 'tor' };

torius.post(url, body, function (err, res, body) {
  console.log(err, res, body);
});
```
