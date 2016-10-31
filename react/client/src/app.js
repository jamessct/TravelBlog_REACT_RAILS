var React = require('react');
var ReactDOM = require('react-dom');
var ScrapBox = require('./components/ScrapBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <ScrapBox></ScrapBox>,
    document.getElementById('app')
  );
}