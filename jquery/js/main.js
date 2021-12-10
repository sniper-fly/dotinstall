'use strict';

$(() => {
    $('button').click(() => {
        // $('p').text('おはしん');
        // $('p').addClass('red-text');

        // $('p').text('おはよう').addClass('red-text');

        // $('<li>').text('new item').appendTo('ul');
        // $('li:nth-child(3n), li:last-child').addClass('red-text');
        $('<li>').text($('input').val()).appendTo('ul');
        $('input').val('').focus();
    })
})
