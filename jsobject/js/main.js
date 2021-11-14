'use strict'

{
    const other = [11, 22, 33, 44];
    const scores = [80, 90, 40, 70, ...other];
    scores.splice(1, 2, 11, 22);

    for (let i = 0; i < scores.length; ++i) {
        console.log(`score ${i}: ${scores[i]}`);
    }

    const hoge = [3, 5];
    const sum = (a, b) => a + b;

    console.log('------------');
    console.log(sum(...hoge));
}
