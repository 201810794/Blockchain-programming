const my = require('./Math');
console.log("- compiled results: " +my);
console.log("- ABI: "+my._compiled.contracts['src/Math.sol:powerOf2'].abi);
console.log("- Bytecode: "+my._compiled.contracts['src/Math.sol:powerOf2'].bin);
