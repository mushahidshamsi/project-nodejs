// CommonJS, every file is a module by default
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
const mg = require("./7-mind-grenade");

sayHi("susan");
sayHi(names.fname);
sayHi(names.lname);
mg.addValues();
console.log(data.items);
console.log(data.persons);
