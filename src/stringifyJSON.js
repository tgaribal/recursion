// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
  	return "null";


  } else if (typeof obj === "number" || typeof obj === "boolean") {
  	return obj.toString();


  } else if (typeof obj === "string") {
  	return '"'+obj+'"';


  } else if (Array.isArray(obj)) {
  	var results = []
  	for (var i = 0; i < obj.length; i++) {
  		results.push (stringifyJSON(obj[i]))
  	}
  	return '['+results+']';


  } else if (typeof obj === 'object') {
  	var results = [];
  	for (var key in obj) {
  		if (typeof obj[key] === 'function') {
  			return '{}'
  		} else {
  			results.push(stringifyJSON(key) + ':' +stringifyJSON(obj[key]));
  		}	
  	}
  	return '{'+results+'}';
  }
};
