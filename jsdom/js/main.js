'use strict';

{
    function update() {
        document.querySelector('h1').textContent = 'Changaaed!';
        document.querySelectorAll('p').forEach((p, index) => {
            p.textContent = `${index}番目のpです`
        });
        const target = document.getElementById('target');

        target.title = 'this is title';
        // target.className = 'my-color';
        // target.classList.add('my-border');
        if (target.classList.contains('my-color') === true) {
            target.classList.remove('my-color');
        } else {
            target.classList.add('my-color');
        }

    }

    document.querySelector('button').addEventListener('click', update);

}
