// VAR

// Var is function scoped when it is declared within a function
// It is globally scoped when a var variable is declared outside a function.
// That means second var greeter overrides value of 1st var greeter above in this function.
// While this is not a problem if you knowingly want greeter to be redefined,
// it becomes a problem when you do not realize that a variable greeter has already been defined before.
// Output: "say Hello instead","say Hello instead"
function varScope() {
  var greeter = 'hey hi';
  var times = 4;

  if (times > 3) {
    var greeter = 'say Hello instead';
    console.log(greeter);
  }

  console.log(greeter);
}

varScope();

// Var variables can be re-declared and updated
// Output: 'say Hello instead'
function redeclareVar() {
  var greeter = 'hey hi';
  var greeter = 'say Hello instead';
  console.log(greeter);
}

redeclareVar();

function updateVar(){
    var greeter = 'hey hi';
    greeter = 'say Hello instead';
    console.log(greeter);
}

// updateVar();


// LET

// Let is block scoped between the {} braces
// So a variable declared in a block with the let is only available for use within that block.
// that means the second let = greeter does not affect the global variable above.
// output: "say Hello instead", "hey hi"
function letScope() {
  let greeter = 'hey hi';
  let times = 4;

  if (times > 3) {
    let greeter = 'say Hello instead';
    console.log(greeter);
  }
  console.log(greeter);
}

letScope();

// Let can be update but not re-declared.
// Output: error

function redeclareLet(){
    let greeter = 'hey hi';
    let greeter = 'say Hello instead';
    console.log(greeter);
}

redeclareLet();

function updateLet(){
    let greeter = 'hey hi';
    greeter = 'say Hello instead';
    console.log(greeter);
}

// updateLet();

// Const - same as Let with block scoped except that
// Const cannot be updated or re-declared

// This will give an error
function updateConst(){
    const greeter = 'hey hi';
    greeter = 'say Hello instead';
    console.log(greeter);
}

// updateConst();

// This will give an error
function redeclareConst(){
    const greeter = 'hey hi';
    const greeter = 'say Hello instead';
    console.log(greeter);
}

// redeclareConst();

const a;
console.log(a); // outputs undefined

// Differences
// 1)	Var declarations are globally scoped or functionally scoped while let and const are block scoped.
// 2)	Var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared
// 3)	They are all hoisted to the top of their scope but while var variables are initialized with undefined, let, and const variables are not initialized.
// 4)	While var and let can be declared without being initialized, const must be initialized during declaration.

