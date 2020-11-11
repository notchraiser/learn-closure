"use strict";

var myVar = 5;

var example = function() {
  var myVar = 10;

  console.info("Local:", myVar);
  console.info("Outer:", this.myVar);
};

example.call({ myVar });

function sum(a, b) {
  return arguments.length === 2 //were two arguments passed?
    ? a + b //yes: return their sum
    : b => a + b; //no:  return a function
}
console.log(sum(2)(3));
