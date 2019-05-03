// var age = 18,
//     accompaniedByAdult = true;

var age = prompt('What is your age?'),
    accompaniedByAdult = confirm('Are you accompanied by somoene over 21?');

    console.log((age, accompaniedByAdult));

    if (age >= 18 && age < 21) {
        console.log('it is working');
    }

// if (age >= 18 && age < 21) {
    // if (accompaniedByAdult == true) {
    //     console.log('Allowed');
    // } else {
    //     console.log('Denied');
    // }

    //ternary operator
//     accompaniedByAdult ? console.log('Allowed') : console.log('Denied');
// } else {
//     console.log('age is not between 18 -21');
// }

//ternary
(age >= 18 & age < 21) ?
    (accompaniedByAdult ?
        console.log('allowed') : console.log('denied')) :
        (age >= 21) ?
            console.log('you are free') : 
            console.log('age is not between 18 and 21');