// 2. Write a separate program that takes a color and returns 'light' if the luminosity is greater than 155 and 'dark' otherwise. At this point, you can just copy the luminosity function from the last step into a new file. You'll require it as a module in Part III.

// $ node islight.js 255 239 213
// light
// $ node islight.js 50 15 25
// dark

var luminosity = function(r, g, b){
	var result = (0.2126*r + 0.7152*g + 0.0722*b)
	if (result > 155){
		return 'light';
	}
	return 'dark';
}
console.log(luminosity( process.argv[2], process.argv[3], process.argv[4]) );