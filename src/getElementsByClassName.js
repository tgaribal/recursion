// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Implement getElementsByClassName with your own function in src/getElementsByClassName.js, and make the specs pass.
// You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  // your code here
  var results = [];
  function checkNode(node) {
  	//console.log(node.className)
  	if (node.className.includes(className)) {
  		results.push(node);
  	}

  	for (var i = 0; i < node.children.length; i++) {
  		checkNode(node.children[i])
  	}
  }
  checkNode(document.body)
  return results;
};

