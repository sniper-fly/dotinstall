'use strict'
// console.log("hello world from main");

// console.log('hello');
// console.log(null);
// console.log(undefined);

const sum1 = function(a, b, c) {
    return a + b + c;
}

function sum2(a, b, c) {
    return a + b + c;
}

const sum3 = (a, b, c) => {
    return a + b + c;
}

const sum4 = (a, b, c) => a + b + c;

const say_hello = msg => console.log(msg);

console.log(sum1(1, 2, 3));
console.log(sum2(1, 2, 3));
console.log(sum3(1, 2, 3));
console.log(sum4(1, 2, 3));

say_hello("aa");
