/* @description {Create immutable object }
            * 1 - Not allowing someone to modify, delete or add // freeze
            * 2 - Not allowing someone to add new details but delete and modify //preventExtensions
            * 3 - Not allowing someone to delete, add but we can modify //seal
    
* @description {Create a method to show if the following key exists or not }
*/

// "use strict";

console.log("hey");
const book = {
  bookName: "Atomic Habits",
  authorName: "James clear",
};
console.log(book);
// adding a new property
book.publishDate = "20/20/20";
// delete book.bookName;
console.log(book);
// Object.preventExtensions(book);
// Object.seal(book);
// Object.freeze(book);

// prevent extensions property will not allow to add any property in our object
book.publishDate = "10/10/10";
console.log(book);
// seal in not allowing us to delete or add any property
book.Date = "10/10/10";
delete book["authorName"];
console.log(book);
//methods for key if its exist or not
const hasKey = book.hasOwnProperty("bookName");
// const hasKey = "bookName" in book;

if (hasKey) {
  console.log("The key exists.");
} else {
  console.log("The key does not exist.");
}
// const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
// has.call(obj_map, "key");

/* -  Create an object and apply object immutable properties over them.
    So if someone try to perform create , update , delete, the following
    action should get logged
    For example , timestamp, action and object name should get logged on
    local-storage or though memoization
*/
const obj = {
  bookName: "Atomic",
  authorName: " clear",
};
console.log(obj);
console.log(obj.constructor.name);
if (obj && obj.constructor.name === "Object") {
  console.log("Before freeze", obj);
  Object.freeze(obj);
  obj.Name = "arun";
  console.log("After freeze", obj);
} else {
  console.log("The obj does not exist.");
}
