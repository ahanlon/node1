var luminosity = function(r, g, b){
	var result = (0.2126*r + 0.7152*g + 0.0722*b)
	return result;
}

var darken = function(r, g, b){
	var result = (r*.8 + ' ' + g*.8 + ' ' + b*.8)
	return result;
}


module.exports = {
	luminosity: luminosity,
	darken: darken,

};