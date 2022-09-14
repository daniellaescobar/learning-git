/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var date = new Date();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = weekday[date.getDay()];

var time = {  weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
var options = 'Today is ' + day + '.' + '<br />Current Time: ' + new Date().toLocaleTimeString('en-us', options);

document.getElementById("answer1").innerHTML = options;


//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// Shoutout to https://www.w3schools.com/jsref/jsref_getday.asp for the help with the days


/* 2.--------
*/
var dates;
var time;
var options = new Date().toLocaleDateString().replace(/\//g, '-') + '</br>' + new Date().toLocaleDateString('en-us', options) + '</br>' + new Intl.DateTimeFormat(['ban', 'id']).format(date);

document.getElementById("answer2").innerHTML = options;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/

function myFunction () {
    var html = document.documentElement.innerHTML;
    document.getElementById('answer3').innerText= html;
}



//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.--------
*/
//

(function() {
'use strict'


paper.install(window); 
paper.setup(document.getElementById('main-canvas'));

// stuff begins now 
var tool = new Tool();

var c = Shape.Circle(200, 200, 80); 
c.fillColor = 'green';

tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20); 
    c.fillColor = 'pink';
};

var c = Shape.Circle(200, 200, 80); 
c.fillColor = 'brown';
var text = new PointText(200, 200); 
text.justification = 'center'; 
text.fillColor = 'white'; 
text.fontSize = 20;
text.content = 'hello world';

paper.view.draw();

console.log('main.js loaded');
}())

// adapt from Learning Javascript Ethan Brown Chapter 1
