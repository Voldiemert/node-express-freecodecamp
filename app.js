// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
// const secret = 'SUPER SECRET';
// const john = 'john';
// const peter = 'peter';
//
// const sayHi = (name) => {
//     console.log(`Hello thee ${name}`);
// }
const names = require('./4-names');
const sayHi = require('./5-utils');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);