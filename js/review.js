var user = {}; //empty object
var name = prompt('Enter name: ');
console.log({ name });
console.log(!!name);
console.log(isNaN(name));

// if (name === ' ' || name === '' || parseInt(name)) {
//     alert('Enter Valid Name: ');
// } else {
//     user.name = name;
// }

//arrow function
var newIsExcluded = excludedName.find((excluded) => excluded === name);

if (name && isNaN(name)) {
    user.name = name;
    var hp = prompt('Enter your hp: ');
    console.log(!!hp);
    console.error.log(typeof hp);
    console.log(isNaN(parseInt(hp)));


    if (hp && !isNaN(parseInt(hp))) {
 user.power = parsInt(hp);
    } else {
        alert('Enter valid hp: ');
    }
} else {
    alert('Enter Valid Name');
}