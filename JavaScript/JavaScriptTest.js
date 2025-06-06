// function Parent(newName,newAge,newStatus){
//   var age = newAge;
//   var status = newStatus;
//   this.name = newName;
//   this.getAge = function(){return age}
// }

// Parent.prototype.getStatus = function() {return this.status}
// Parent.prototype.getName = function() {return this.name}
// Parent.prototype.sayHello = function() {
//   alert('My name is '+ this.getName())
//   alert('My age is '+ this.getAge())
//   alert('I am'+ this.getStatus())
// }

// var p1 = new Parent('Sam',23,'single')
// p1.age = 24
// p1.name = 'Peter'
// p1.sayHello();

// Set.prototype.newMethod = function(setB){
//   var newResult = new Set();
//   for(var item of setB){
//     if(this.has(item)){
//       newResult.add(item)
//     }
//   }
//   return newResult;

// }

// function result(a1,a2){
//   var s1 = new Set ([...a1])
//   var s2 = new Set ([...a2])
//   return s1.newMethod(s2)

// }

// var arrA = [1,2,3,4]
// var arrB = [3,4,5,6]
// var myresult = result(arrA,arrB)

// console.log(myresult)
// https://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript
// var y;
// function modifyVariables(x) {
//   var z = 5;
//   x += 2;
//   y += x + z;
// }

// var x = 1;
// var y = 2;
// var z = 3;

// modifyVariables(x);
// document.writeln(x);
// document.writeln(y);
// document.writeln(z);

// var x = 1;
// var y = 2;
// var z = 3;
// function modifyVariables(x) {
//   var z = 5;
//   x += 2;
//   y += x + z;
// }

// y += 8;
// y = 10;


console.log(Math.round(1.5%0.2*100)/100)
