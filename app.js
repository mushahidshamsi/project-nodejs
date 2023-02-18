const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);

// npm
// npm (node package manager) has all the libraries from which we can install in our projects
// 1. npm init - installs npm locally asking the specifications
// 2. npm i lodash - this command installs lodash library
// 2. npm i bootstrap - this command installs bootstrap library

// git
// 1. git init
// 2. git add .
// 3. git commit -m "my commit"
// 4. git remote add origin https://github.com/mushahidshamsi/node-tutorial.git
// 5. git branch -M main
// 6. git push -u origin main

// git config --global user.name "Mushahid Shamsi"
// git config --global user.email "mushahidshamsi@gmail.com"

// git clone https://github.com/mushahidshamsi/node-tutorial.git
// after cloning just write npm install in terminal, it'll install all the libraries
