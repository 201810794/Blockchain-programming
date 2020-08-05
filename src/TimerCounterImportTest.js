const my = require('./TImerCounter');
console.log("- compiled results: " +my);
console.log("- ABI: "+my._compiled.contracts['src/TImerCounter.sol:TimerCounter'].abi);
console.log("- Bytecode: "+my._compiled.contracts['src/TImerCounter.sol:TimerCounter'].bin);
