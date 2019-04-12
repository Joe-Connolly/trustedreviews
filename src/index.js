import $ from 'jquery';
import './style.scss';

$('#main').html('You\'ve been on this page for 1 second.');

let num = 1;
setInterval(() => {
  num += 1;
  const output = `You've been on this page for ${num} seconds.`;
  $('#main').html(output);
}, 1000);


/*
var hello = 'hi';
var output = `I wanna output ${hello}`;
$('#main').html(output);
*/
