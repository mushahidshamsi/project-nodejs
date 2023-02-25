const { readFile, writeFile } = require("fs");

console.log("Started the first task");

const first = readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
    console.log("Completed first task");
  }
});

console.log("Staring next task");
