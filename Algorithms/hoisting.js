// Hoisting in action

foo(); // ‘hello hoisting’
function foo() {
  console.log('hello hoisting');
}

// Javscript will first hoise functions, and then variables:
// function declaration can also override each other
foo(); // 3
var foo;
function foo() {
  console.log(1);
}
foo = function() {
  console.log(2);
};
function foo() {
  console.log(3);
}

// Closures
// function foo() {  // 'scope of foo' aka lexical scope for bar
//    var memory = 'hello closure';
//    return function bar() {
//       console.log(memory);
//    }
// }
// var memory = null,
//     baz = foo();
// baz(); // 'hello closure'
