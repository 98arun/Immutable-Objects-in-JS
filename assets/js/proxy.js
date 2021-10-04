console.log("hey i'm in proxy");

const bookShell = { book: "the secret" };
const bookShellProxy = new Proxy(bookShell, {
  get: (target, property) => {
    console.log({ target });
    return property in target ? target[property] : "property does not exist";
  },
  set: (target, property, value) => {
    if (property === "bookColor") {
      console.log({ property, value });

      if (typeof value !== "string") {
        throw new TypeError("this is not a string");
      }
      if (
        property === "bookColor" &&
        !["blue", "red", "black"].includes(value.toLowerCase())
      ) {
        throw new Error("bookColor not found");
      }
    }
    target[property] = value;
  },
  has: (target, property) => {
    if (property === "bookColor") {
      return false;
    }
    return true;
  },
  deleteProperty(target, property) {
    if (property in target) {
      delete target[property];
      console.log(`property removed: ${property}`);
      // expected output: "property removed: texture"
    } else {
      console.log("property does not exist for remove");
    }

    // {
    //   throw new Error("property does not removed");
    // }
  },
});

bookShellProxy.bookColor = "red";
console.log(bookShell);
console.log(bookShellProxy.bookColor);
console.log("bookColor" in bookShellProxy);
delete bookShellProxy.text;
console.log("after delete", bookShell);

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(a) {
//       setTimeout(function () {
//         console.log("var:", a);
//       }, a * 500);
//       console.log("settime1");
//     }
//     close(i);
//   }
//   console.log("settime2");
// }
// x();

// function y() {
//   for (let j = 1; j <= 5; j++) {
//     setTimeout(function () {
//       console.log("let:", j);
//     }, j * 1000);
//     console.log("let, settime1");
//   }
// }
// console.log("let, settime2");

// y();
