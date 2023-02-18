var num1 = 1;
var num2 = 2;

function addValues() {
  var num = num1 + ++num2;
  console.log(`Then sum is ${num}`);
}

module.exports = { addValues };

//addValues();
