var Stack = require('./Stack');

var numbers = new Stack();

numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(4);

// numbers.top();
//
// numbers.pop();

console.log(numbers);

console.log(numbers.top());

console.log(numbers.pop());

console.log(numbers);
