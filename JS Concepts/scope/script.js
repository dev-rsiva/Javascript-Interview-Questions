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

// _____________________________XXXXXXXXXXXXXXX_________________________________________

// console.log(z());
// var z = function() {
//  return "Hello, world!";
// };

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   // Here let and const are hoisted in Block scope,
//   // While, var is hoisted in Global scope.
// }
// console.log(a);
// _____________________________XXXXXXXXXXXXXXX_________________________________________

// var rt = "rt";

// var rv = "rv";
// function x() {
//   var j = 30;
//   console.log(rt);
//   var op = "op";
//   let pq = "pq";
//   var ru = "ru";
//   function r() {
//     var t = 0;
//     console.log(op);
//     console.log(ru);
//     console.log(pq);
//     function e() {
//       //   console.log(t);
//       console.log(j);
//       console.log(rv);
//     }
//     e();
//   }
//   r();
// }

// const z = x();

// _____________________________XXXXXXXXXXXXXXX_________________________________________

// var aName = "singer";
// let aModel = "D56";

// function aMessage(myMsg) {
//   let location = "Dhaka";
//   var cus = "siva";

//   function sold() {
//     var quantity = 112;
//     let netQuantity = 200;
//     console.log(`${aName} sold ${quantity} pcs of refrigerators by ${cus}.`);
//   }

//   sold();

//   console.log(
//     `${aModel} refrigerators are available in ${location} which are ${myMsg}.`
//   );
// }

// aMessage("Cool looking");

// _____________________________XXXXXXXXXXXXXXX_________________________________________

// var apple = "global apple";
// let banana = "global banana";
// {
//   let banana = "block banana";
//   let apple = "block apple";

//   var grape = "global grape";
//   let orange = "block orange";
//   console.log(apple);
//   console.log(banana);
// }
// console.log(banana);
// console.log(grape);
// console.log(orange);
