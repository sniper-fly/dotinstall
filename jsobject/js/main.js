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

    console.log('------------');
    // 分割代入
    const arr = [1, 2, 3, 4];
    const [a, b, c, d] = arr;
    console.log(a);
    console.log(d);

    // レスト構文
    const [e, f, ...other_ele] = arr;
    console.log(other_ele);

    // 値の交換
    let x = 1;
    let y = 10;
    [x, y] = [y, x];
    console.log(x);
    console.log(y);
}
