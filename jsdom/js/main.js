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

        // if (target.classList.contains('my-color') === true) {
        //     target.classList.remove('my-color');
        // } else {
        //     target.classList.add('my-color');
        // }

        // target.classList.toggle('my-color')
        // target.textContent = target.dataset.translation;

        // const item = document.createElement('li');
        // item.textContent = 'item3';
        // const ul = document.querySelector('ul');
        // ul.appendChild(item);

        // const item = document.querySelectorAll('li')[0];
        // const copy = item.cloneNode(true);
        // const ul = document.querySelector('ul');
        // const insert_place = document.querySelectorAll('li')[2];
        // ul.insertBefore(copy, insert_place);

        // const new_item = document.createElement('li');
        // const input = document.querySelector('input');
        // new_item.textContent = input.value;

        // const insertNode = document.querySelector('ul');
        // insertNode.appendChild(new_item);

        // input.value = '';
        // insertNode.focus();

        // const color = document.querySelector('select');
        // const li = document.createElement('li');
        // li.textContent = `${color.value} : ${color.selectedIndex}`

        // const insertNode = document.querySelector('ul');
        // insertNode.appendChild(li);

        // const radio_button = document.querySelectorAll('input');
        // let selected_color;
        // radio_button.forEach(e => {
        //     if (e.checked) {
        //         selected_color = e.value;
        //     }
        // })
        // const li = document.createElement('li');
        // li.textContent = selected_color;

        // const insertNode = document.querySelector('ul');
        // insertNode.appendChild(li);
    }

    // document.querySelector('button').addEventListener('click', update);

    // document.querySelector('button').addEventListener('dblclick', () => {
    //     console.log("double clicked!");
    // });

    // document.addEventListener('mousemove', e => {
    //     // console.log("moved");
    //     console.log(e.clientX, e.clientY);
    // })

    // document.addEventListener('keydown', e => {
    //     console.log(e.key);
    // })

    // const textarea = document.querySelector('textarea');
    // textarea.addEventListener('focus', () => {
    //     console.log('focus');
    // })
    // textarea.addEventListener('blur', () => {
    //     console.log('blur');
    // })
    // textarea.addEventListener('input', () => {
    //     console.log('input');
    //     console.log(textarea.value.length);
    // })
    // textarea.addEventListener('change', () => {
    //     console.log('change');
    // })

    // const form = document.querySelector('form');
    // form.addEventListener('submit', e => {
    //     e.preventDefault();
    //     console.log('aaa');
    // })

    document.querySelector('ul').addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
            e.target.classList.toggle('done');
        }
    })
}
