'use strict';

{
    function update() {
        document.querySelector('h1').textContent = 'Changed!';
        document.querySelectorAll('p').forEach((p, index) => {
            p.textContent = `${index}番目のpです`
        });
        const target = document.getElementById('target');

        target.title = 'this is title';
        target.style.color = 'red';
        target.style.backgroundColor = 'black';
    }

    document.querySelector('button').addEventListener('click', update);

}
