# js-connection-recommender

Javascript package that recommend common friend that help to make connection to new friends


[![Build Status](https://travis-ci.org/cschen1205/js-connection-recommender.svg?branch=master)](https://travis-ci.org/cschen1205/js-connection-recommender) [![Coverage Status](https://coveralls.io/repos/github/cschen1205/js-connection-recommender/badge.svg?branch=master)](https://coveralls.io/github/cschen1205/js-connection-recommender?branch=master) 

# install

npm install js-connection-recommender

# Usage 

```javascript
var jscrec = require("js-connection-recommender");
var adj = {};
adj["Alice"] = [ "Bob", "Carole" ]; // Alice knows Bob and Carole
adj["Bob"] = ["Dave", "Jack", "Alice"]; // Bob knowns Dave, Jack and Alice
var result = jscrec.fitAndTransform(adj);
console.log(result);
```
