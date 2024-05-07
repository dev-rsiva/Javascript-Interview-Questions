

const outerFunction = () => {
  let num = 10;

  return function innerFunction() {
    num++;
    console.log(num);
  };
};

const newVariable = outerFunction();

console.log(newVariable);
// ƒ innerFunction() {
//   num++;
//   console.log(num);
// }

newVariable(); //10
newVariable(); //10
newVariable(); //10 






// Global variable
var globalVar = 'I am a global variable';

// Global function declaration
function sayHello() {
    console.log('Hello from the global execution context!');
}

// Code execution in the global context
sayHello(); // Output: "Hello from the global execution context!"
console.log(globalVar); // Output: "I am a global variable"








function sayGoodbye(name) {
  // Local variable
  var farewell = 'Goodbye, ' + name + '!';

  // Code execution in the function context
  console.log(farewell); // Output: "Goodbye, John!"
}

// Code execution in the global context
sayGoodbye('John');




