/* @description {Create immutable object }
            * 1 - Not allowing someone to modify, delete or add // freeze
            * 2 - Not allowing someone to add new details but delete and modify //preventExtensions
            * 3 - Not allowing someone to delete, add but we can modify //seal
    
* @description {Create a method to show if the following key exists or not }
*/
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
