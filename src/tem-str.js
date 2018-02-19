// function Person(name) {
//   // if (new.target === Person) {
//   this.name = name; // using new
//   // } else {
//   // throw new Error("You must use new with Person.")
//   // }
// }

// function Profession(name) {
//   Person.call(this, name);
//   this.profname = name;
// }

// var person = new Person("Nicholas");
// var driver = new Profession('driver');

// console.log(driver);


// function addExtra(price) {
//   return new Promise((resolve, reject) => {

//     if (price > 2) reject('Price cannot exceed 3');

//     setTimeout(() => {
//       resolve(price + 1)
//     }, 1000)

//   })
// }

// addExtra(3).then(console.log)
//   .catch(console.log)

// the execution: catch -> then
// new Promise(function(resolve, reject) {

//   throw new Error("Whoops!");

// }).catch(function(error) {

//   alert("The error is handled, continue normally");

// }).then(() => alert("Next successful handler runs"));

new Promise((resolve) => setTimeout(resolve(1), 1000))
  .then(console.log)
  .then(console.log)