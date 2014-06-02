'use strict';

var readline = require('readline');

var completer = function(line) {
  var completions = 'h q 9 +'.split(' ')
  var hits = completions.filter(function(c) { return c.indexOf(line) == 0 })
  // show all completions if none found
  return [hits.length ? hits : completions, line]
};

var beerMe = function() {
  var i = 100;
  while (--i) {
    console.log(i + ' bottles of beer on the wall');
    console.log(i + ' bottles of beer');
    console.log('You take one down, pass it around,');
    console.log((i - 1) + ' bottles of beer on the wall!');
    if (i-1) {
      console.log('----------');
    }
  }
};

var accumulator = 0;

var hq9plus = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
});

hq9plus.setPrompt('> ');
hq9plus.prompt();

hq9plus.on('line', function(line) {
  var input = line.toLowerCase().replace(/[^hq9\+]/g, '');
  if (input) {
    for (var i = 0; i < input.length; i++) {
      switch(input[i]) {
        case 'h':
          console.log('hello, world');
          break;
        case 'q':
          console.log(line);
          break;
        case '9':
          beerMe();
          break;
        case '+':
          accumulator++;
          break;
      }
    }
  }
  hq9plus.prompt();
});