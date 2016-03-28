var Que = require('./Que');

var numbers = new Que();

numbers.enqueue(2);
numbers.enqueue(1);
numbers.enqueue(3);

console.log(numbers.front());
console.log(numbers.dequeue());
console.log(numbers.isEmpty());
console.log(numbers.getSize());



console.log(numbers);
