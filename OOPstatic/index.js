const CalculatorOOP = require("./CalculatorOOP.js");
const { operation, numbers } = require("./getData");

const calc = CalculatorOOP.init(operation, numbers);
console.log(calc);
