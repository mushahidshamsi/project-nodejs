const { readFile, writeFile } = require("fs").promises;

//after adding .promises above we don't need the below 3 lines
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//the above readFilePromise will replace the getText function
//as both have the same functionality
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME ! ${first} ${second}`
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
