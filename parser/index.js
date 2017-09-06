const esprima = require('esprima');

const parsed = esprima.parse('let x = 12;');

console.log(esprima.generate(parsed));