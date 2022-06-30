// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./1_names");
const sayHi = require("./2_utils");
const data = require("./4_alternative-flavor");
require("./5_mind-grenade");

console.log(data);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
