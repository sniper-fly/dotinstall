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

{
    console.log('-------------');
    const scores = [10, 20, 30, 40];
    scores.forEach(e => console.log(e));
}

{
    console.log('-------------');
    const prices = [180, 190, 200];
    const updated_prices = prices.map(price => price + 20);
    updated_prices.forEach(e => console.log(e));
}

{
    // alert('hello');
    // const answer = confirm('hoge');
    // if (answer) {
    //     console.log('yes!!');
    // }
}

{
    let i = 0;
    function showTime() {
        console.log(new Date());
        i++;
        if (i >= 3) {
            clearInterval(intervalId);
        }
    }

    // const intervalId = setInterval(showTime, 1000);
    setTimeout(showTime, 5000);
}

{
    // text, likeCount変数を持ち、showメソッドでmsgを表示できるクラスPostを作る
    //

    class Post {
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text}: good ${this.likeCount}`);
        }
    }

    const hoge = [new Post('hoge'), new Post('heyhey')];
    hoge.forEach(e => e.show());
}
