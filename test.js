const Rx = require('rxjs/Rx')

const arraySize = 20;
const arrays = 300000; // 1e6 + 500000;

const im = 'imperative';
const rx = 'rx';

const type = process.argv[2] || im;

console.log();
console.log(`Array elements: ${arraySize}`)
console.log(`Array count: ${arrays}`)
console.log("Performing test as " + type)

if (type === 'imperative') {
  var hashmap = {}

  for (var i = 0; i < arrays; i++) {
    hashmap[i] = Array(arraySize).fill(Math.random());
  }

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`${used} MB heap used`);

} else if (type === 'rx') {
  var hashmap = {}
  
  for (var j = 0; j < arrays; j++) {
    let arr = Array(arraySize).fill(Math.random());
    let stream = Rx.Observable.from(arr);
    hashmap[j] = stream
  
  }

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`${used} MB heap used`);
}

console.log();