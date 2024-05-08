- undefined is a placeholder where it is just taking memory. when the variables are taking memory(assigning as undefined) before the thread of execution(code of execution) starts.

- Do not say the term as "assigning" when talking about the memory creation phase in the execution context. Tell as "memory is allocating" or "taking memory"

- window is same as this. And this is same as global keyword in the global space(window = this = global)

- window object is created whenever the execution context is created(Even for global execution context and execution context in function invocation)

var a = 10;

console.log(a) is equal to console.log(this.a) is equal to console.log(window.a) in global space.

- Javscript is loosely(Weakly) typed language. Any data type can be assigned to a variable as below

var a
console.log(a) // undefined
a = 10;
console.log(a) // 10
a = "Hello world"
console.log(a) // "Hello world"

- Do not assign undefined to any variable. It is meant for specific purpose telling that variable is not assigned, and jsut taking memory. var a = undefined



