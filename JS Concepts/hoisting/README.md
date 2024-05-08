#Hoisting

Hoisting is a javascript mechanism where one can access teh variables and functions even before the initislization/assigning value without getting any error.

It can be possible because the variables are assigned as undefined and functions are assigned as function itself during the memory creation phase in the execution context.

so,

Whenever you can console.log variables before initialisation, it will print as undefined.

Whenever you console.log the functions before initialization, it will print as function itself.

Whenever you call the functions before initialization, it will execute the function because, in the memory creation phase the function is assigned as whole function code itself(not as undefined unlike variables)

Scenario 1: (console.logging variables before initialization)
Scenario 2: (console.logging variables without declaration)
Scenario 3: (console.logging function before even function is written)
Scenario 4: (calling function even before it is written)
Scenario 5: (calling function even before it is written where it is assigned to a variable)
Scenario 6: (calling function even before it is written where it is assigned to a variable)

![mole](https://github.com/dev-rsiva/Javascript-Machine-Coding-Practice/assets/131841846/bc26c2c8-21d5-4c08-91d9-40f2ca0e92fd)

![random image](../Planly-login-bg-image4.jpg)
