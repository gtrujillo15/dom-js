//query selector
var anchor = document.querySelector('a');
console.log(anchor);

var allAnchors = document.querySelectorAll('a');
console.log(allAnchors);

//change text
allAnchors[1].textContent = 'This text is set from JS using DOM manipulation.';
allAnchors[1].href = 'https://www.google.com';
allAnchors[1].target = '_blank';

//get element by id
var para1 = document.getElementById('para-1');
console.log(para1);

var para1UsingSelector = document.querySelector('#para-1');
console.log(para1UsingSelector);

//change text color
para1.style.color = 'orange'; //using color

//button
var btn = document.getElementsByClassName('button');
console.log(btn[0]);
btn[0].style.padding = "10px";
btn[0].style.fontSize = "22px";