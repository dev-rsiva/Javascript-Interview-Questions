#Execution Context:

-In JavaScript, an execution context is the environment where JavaScript code is executed. It contains two components memory component/variable environment and code component/thread of execution.

-Memory creation phase/variable environment is where the variables and functions are allocated memory even before single line of code is executed.

-Thread of execution is where the each code of line is executed.

#Global execution context:

-The global execution context (GEC) is the top-level context in a JavaScript program and is created when a JavaScript program starts running. It's the default execution context where all JavaScript code that is not inside of a function gets executed. The GEC is the foundation upon which all other execution contexts are built and plays a pivotal role in managing global variables and functions

#CallStack:
Call Stack is a mechanism to keep track of its place in script that calls multiple function.

Javascript manages code execution context creation and deletion with the the help of Call Stack.

Call Stack maintains the order of execution of execution contexts. It is also known as Program Stack, Control Stack, Runtime stack, Machine Stack, Execution context stack.

#undefined:
-In first phase (memory allocation) JS assigns each variable a placeholder called undefined. undefined is when memory is allocated for the variable, but no value is assigned yet.

#not defined:
-If an object/variable is not even declared/found in memory allocation phase, and tried to access it then it is Not defined

#loosely typed / weakly typed:
-Javascript doesn't attach variables to any datatype. We can say var a = 5, and then change the value to boolean a = true or string a = 'hello' later on.
-Never assign undefined to a variable manually. Let it happen on it's own accord.

#Hoisting

Hoisting is a javascript mechanism where one can access teh variables and functions even before the initislization/assigning value without getting any error.

It can be possible because the variables are assigned as undefined and functions are assigned as function itself during the memory creation phase in the execution context.

so,

Whenever you can console.log var variables before initialisation, it will print as undefined.

Whenever you console.log the functions before initialization, it will print as function itself.

Whenever you call the functions before initialization, it will execute the function because, in the memory creation phase the function is assigned as whole function code itself(not as undefined unlike variables)

Whenever you can console.log let/const variables before intialization, it will print error "Uncaught ReferenceError: Cannot access 'a' before initialization". This is because teh let and const declarations only be hoisted and not initialization/assignment. IN another fashion, let and const are hoisted without default initialization value "undefined" where the var variables are hoisted with default initialization value "undefined". This keyword "undefined" is a placeholder for memory. It means the var variable is not assigned/not allocated memory to any values, but it is allocated memory using the placeholder "undefined" in place/instead of any values which we assign later on.

The error "Uncaught ReferenceError: Cannot access 'a' before initialization" will remain till our initializations are made to that let/const variable.

The zone between the hoisting of let/const without default value(declarations only) and the initialization of let/const(till assigning value to the let/const) is called temporal dead zone.

Scenario 1: (console.logging variables before initialization)
Scenario 2: (console.logging variables without declaration)
Scenario 3: (console.logging function before even function is written)
Scenario 4: (calling function even before it is written)
Scenario 5: (calling function even before it is written where it is assigned to a variable)
Scenario 6: (calling function even before it is written where it is assigned to a variable)

![mole](https://github.com/dev-rsiva/Javascript-Machine-Coding-Practice/assets/131841846/bc26c2c8-21d5-4c08-91d9-40f2ca0e92fd)

![random image](../Planly-login-bg-image4.jpg)

Reference Error are thrown when variables are in temporal dead zone.

Syntax Error doesn't even let us run single line of code.

let a = 10;
let a = 100; //this code is rejected upfront as SyntaxError. (duplicate declaration)

---

let a = 10;
var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in same scope)
Let is a stricter version of var. Now, const is even more stricter than let.
let a;
a = 10;
console.log(a) // 10. Note declaration and assigning of a is in different lines.

---

const b;
b = 10;
console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const b = 10 only will work)

---

const b = 100;
b = 1000; //this gives us TypeError: Assignment to constant variable.
Types of Error: Syntax, Reference, and Type.

Uncaught ReferenceError: x is not defined at ...

This Error signifies that x has never been in the scope of the program. This literally means that x was never defined/declared and is being tried to be accesed.
Uncaught ReferenceError: cannot access 'a' before initialization

This Error signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned a value, it is its Temporal Dead Zone. Thus, this error occurs.
Uncaught SyntaxError: Identifier 'a' has already been declared

This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.
Uncaught SyntaxError: Missing initializer in const declaration

This Error signifies that we haven't initialized or assigned value to a const declaration.
Uncaught TypeError: Assignment to constant variable

This Error signifies that we are reassigning to a const variable.

#What is scope?

-The boundaries/limits within which the variables and functions are accessible is called scope.

-Scope in JavaScript refers to the visibility of variables and functions. A variable or function is only accessible within its scope. There are two types of scope in JavaScript: global scope and local scope.

-Global scope:
Variables and functions declared outside of any function are in the global scope. This means that they can be accessed from anywhere in your code.
-Local scope:
Variables and functions declared inside of a function are in the local scope. This means that they can only be accessed from within that function.
-Block scope:
Block scope is the accessibilty of variables and functions inside the block boundaries/limits. Beyond/outside the block the variables cannot be accessed.
Variables and functions declared inside of a block are in the block scope. Block scope is created within specific code blocks, such as conditional statements (if, else, switch) and loops (for, while).

Note:

Scenario for [GEC, EC]/When the EC has its outer environment as GEC/when the function has its first outer environment as Global environment:

-In the global level(Global execution context):

When the js code starts running, all the variables and functions in the global level(global boundaries/limits)(except the those inside the block) are allocated memory even before single line of code is executed.

This is identified as "Global" in chrome browser. All these variables are stored in "Global".

var variables present in the global level are attached to "Global" in chrome browser & let, const variables present in the global level are attached to seperate memory space named "script" in chrome browser.

"Global" in chrome browser is always present even when no line of code is executed.

Lexical environment for this level is "Global" object only.

-In the function level(Function execution context):

Whenever the function is called, function execution context is created, when the function starts executing, all the variables and functions in the function level(function boundaries/limits) in the functions(except those inside the block) are allocated memory even before single line of code is executed.

This identified as "Local" in chrome browser. All these variables are stored in "Local".

var, let, const are attached to "Local" in chrome browser.

"Local" in chrome browser will be created when a function is called and deleted when the code execution is completed.

Lexical environment for this level is "Global" object only.

-In the block level(There is no seperate execution context is created for block, it may present in the global level also, function level also):

What is block?
Block aka compound statement is used to group JS statements together into 1 group. We group them within {...}

Block scope variables are creacted/evaluated in the "block" in the chrome browser only at the time of execution(at the time of enters the block) and not compiling(variables are declared and memory for these variables are created only when the code execution enters the block.)

This is identified as "Block" in chrome browser. All these variables are stored in "Block".

var, let, const are attached to "Block" in chrome browser.

"Block" in chrome browser will be created when a code execution enters the block and deleted at end of the block.

Scenario for [GEC, EC, EC, EC..etc]/When the EC has its outer environment as EC/when the function has its first outer
environment as function environment/function inside function:

In this scenario only, closure will form.

Whenever the function(inner function) is present inside another function(outer function), variables required for a inner function are present outside of it(that means, present in the outer function environment), those variables are stored in seperate memory called "Closure". This closure will form only when the variables are needed & it is present in the outer function environment(may first outer function or second outer function and etc..), the closure form only when the variables are required to the current function(inner function) are present in the any of the outer function environment. Otherwise, it will not form.

Why it is saved in the seperate memory space called closure rather attached to global or script?

This is because, when a function(outer function) returns another function(inner function). Whenever the returned function is called later on, there will not be any outer environment exists for returned function. So, there is no way for this inner function to access the variables which required for its execution after returned from the outer function. So to store the required variables variables even after the the function completes its execution, we need seperate storage/component for remmeber and use it later for execution. So whenever any of the inner function is returned, that returned function will always take the required variables as a part of it and stored in a seperate memory space(Only required variables are stored in any outer function/lexical environment). This seperate storage is identified in chrome browser as "Closure outer function"(Eg. "Closure y"). This "Closure y" is an outer funtion(It means closure is a variable environment of the outer function). Another way of saying is, Closure is a function along with its lexical scope. A function along with reference to its outer environment together forms a closure. Or in other words, A Closure is a combination of a function and its lexical scope bundled together.

-What is Lexical Environment?

Lexical Environment is equal to local memory + lexical env of its parent. Hence, Lexical Environement is the local memory along with the lexical environment of its parent

Whenever an Execution Context is created, a Lexical environment(LE) is also created and is referenced in the local Execution Context(in memory space).

The any function can be accessible to all of its parents lexical environment.

-What is scope chain?

The process of going one by one to parent and checking for values is called scope chain or Lexcial environment chain.

What is Lexical Scope/Static scope?

whenever the inner function is store the variables outside the place where that function is being placed physically in the codebase is called Lexical scope. Javascript follows Lexical scope only

What is Dynamic Scope?

Whenver the inner function is store the variables outside teh place where that function is being called in the codebase is called Dynamic scope.

What is Shadowing?

var a = 100;
{
var a = 10; // same name as global var
let b = 20;
const c = 30;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
}
console.log(a); // 10, instead of the 100 we were expecting. So block "a" modified val of global "a" as well. In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself.
So, If one has same named variable outside the block, the variable inside the block shadows the outside variable. This happens only for var

Let's observe the behaviour in case of let and const and understand it's reason.

let b = 100;
{
var a = 10;
let b = 20;
const c = 30;
console.log(b); // 20
}
console.log(b); // 100, Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary mem space)(100)). Same is also true for _const_ declarations.
Block Scope Explaination

Same logic is true even for functions
const c = 100;
function x() {
const c = 10;
console.log(c); // 10
}
x();
console.log(c); // 100
What is Illegal Shadowing?

let a = 20;
{
var a = 20;
}
// Uncaught SyntaxError: Identifier 'a' has already been declared
We cannot shadow let with var. But it is valid to shadow a let using a let. However, we can shadow var with let.
All scope rules that work in function are same in arrow functions too.
Since var is function scoped, it is not a problem with the code below.
let a = 20;
function x() {
var a = 20;
}


1. Module Design Pattern:

The module design pattern allows us to encapsulate related functionality into a single module or file. It helps organize code, prevent global namespace pollution, and promotes reusability.

Example: Suppose we're building a web application, and we want to create a module for handling user authentication. We can create a auth.js module that exports functions like login, logout, and getUserInfo.

function userAuthentication() {
  let loggedInUser = "no user";

  function login(username, password) {
    //user auth is processing
    loggedInUser = "siva";
  }

  function logout() {
    loggedInUser = null;
  }

  function getUsername() {
    return loggedInUser;
  }

  return {
    login,
    logout,
    getUsername,
  };
}

const authModule = loginAuth();

authModule.login("siva", "secret");

console.log(authModule.getUsername()); // "siva"


![alt text](image.png)