// ------- PART 1 ------------------------

// Part I: Luminosity
// 1. Write a program that takes a color and returns the luminosity of that color using the following formula: luminosity = 0.2126*r + 0.7152*g + 0.0722*b

// $ node luminosity.js 255 239 213
// 240.52439999999999
// $ node luminosity.js 50 15 25
// 23.163
// It should take each RGB color component as a separate command line argument. They can be accessed with process.argv[2], process.argv[3], process.argv[4]. (process[argv[0] refers to the executing program, 'node', and process.argv[1] refers to the current filename, e.g. 'luminosity.js'.)

var luminosity = function(r, g, b){
	var result = (0.2126*r + 0.7152*g + 0.0722*b)
	return result;
}
console.log(luminosity( process.argv[2], process.argv[3], process.argv[4]) );

var darken = function(r, g, b){
	var result = (r*.8 + ' ' + g*.8 + ' ' + b*.8)
	return result;
}


