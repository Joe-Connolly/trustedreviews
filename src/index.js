import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

/*
import $ from 'jquery';
import './style.scss';

$('#main').html('You\'ve been on this page for 1 second.');

let num = 1;
setInterval(() => {
  num += 1;
  const output = `You've been on this page for ${num} seconds.`;
  $('#main').html(output);
}, 1000);

var hello = 'hi';
var output = `I wanna output ${hello}`;
$('#main').html(output);
*/
