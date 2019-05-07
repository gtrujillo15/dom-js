//button
var btn = document.getElementsByClassName('button');
var btnUsingSelector = document.querySelector('.button');
btn[0].style.padding = "10px";
btn[0].style.fontSize = "22px";

// add event listener
btnUsingSelector.addEventListener('click', function () {
    console.log('button was clicked from js')
});

btnUsingSelector.addEventListener('mouseover', function (event) {
    console.log(event)
    console.log(typeof event.target)

    var btnText = event.target.innerHTML;
    alert('Mouse over on the' + btnText + 'button.');
});

// cancel button

var btn_cancel = document.querySelector('.button-cancel');
btn_cancel.addEventListener('click', function (){
    var response = confirm('Are you sure you want to cancel?')
    console.log(response)

    // if user confirms, do something = response value is true
    // if user cancels, do something = response value is false
});

// add an event on the document that captures any key that is typed/clicked on the keyboard and console.log that value//
document.addEventListener('keypress', function (event) {
    console.log(event.key)
    console.log(event.keyCode)
});

document.addEventListener('keyup', function (event) {
    console.log(event.key)
    console.log(event.keyCode)
});

document.addEventListener('keydown', function(event) {
    console.log(event.key)
    console.log(event.keyCode)
})

// listen for scroll event on document and console.log the psoition of hte cursor on the document //

document.addEventListener('scroll', function(event) {
    console.log(event.key)
    console.log(event.keyCode)
})