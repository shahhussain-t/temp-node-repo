const { readFile, writeFile } = require("fs");


console.log("start")
readFile("./content/first.txt", "utf-8", (error, result) => {
  if (error) {
    console.log("error acqured file reading the file");
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (error, result) => {
    if (error) {
      console.log("error acqured file reading the file");
      return;
    }
    const second = result;

    writeFile(
      "./content/async-result.txt",
      `this is async ${first}, ${second}`,
     {flag:'a'}
      ,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});


console.log("starting the next");
// console.log("starting the next");
// console.log("starting the next");

// console.log("starting the next");
// console.log("starting the next");
// console.log("starting the next");
// console.log("starting the next");

// console.log("starting the next");
// console.log("starting the next");
// console.log("starting the next");

// console.log("starting the next");
// console.log("starting the next");
// console.log("starting the next");
// console.log("starting the next");
// console.log("starting the next");
