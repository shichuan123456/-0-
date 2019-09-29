console.log(Array(8)) // [ <8 empty items> ]
console.log(Array(8, 2)) // [8,2]
console.log(new Array(8, 2)) // [8,2]
console.log(Array.of(8)) // [8]
console.log(Array.of(1, 2, 3)) // [1,2,3]

function Array() {
  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
}

if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  }
}

var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};
Array.from(obj, function (value, index) {
  console.log(value, index, this, arguments.length);
  return value.repeat(3);
}, obj);


console.log(Array.from('abc')) // ["a", "b", "c"]
console.log(Array.from(new Set(['a', 'b', 'c']))) // ["a", "b", "c"]


console.log(Array.from({
  length: 10
}, (v, i) => i));

console.log(Object.keys(Array(10).fill(1)))

var a = {
  __proto__: Array.prototype
};
a instanceof Array; // true
a.constructor === Array; // true
Array.prototype.isPrototypeOf(a); // true
Object.getPrototypeOf(a) === Array.prototype; // true


if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
}
