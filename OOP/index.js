const CalculatorOOP = require("./CalculatorOOP.js");
const { operation, numbers } = require("./getData");

const calc = new CalculatorOOP(operation, numbers);
console.log(calc.init());
