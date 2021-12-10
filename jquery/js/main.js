'use strict';

$(() => {
    $('button').click(() => {
        // $('p').text('おはしん');
        // $('p').addClass('red-text');

        // $('p').text('おはよう').addClass('red-text');

        $('li:nth-child(3n), li:last-child').addClass('red-text');
    })
})
