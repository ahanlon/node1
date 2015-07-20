var colorutil = require('./colorutil');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var darken = colorutil.darken(r,g,b);

console.log(darken);