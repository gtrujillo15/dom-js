// user object:
var user = {
    name: 'Gaby',
    hp: 50,
};
console.log(user);

var users = [];
// users.push(user);
console.log(users);
var userCount = 5;



while (users.length < userCount) {
    var user = {};
    // have the user do it themselves
    user.name = prompt('Enter User name: ');
    user.hp = prompt('Enter user hp: ');
    console.log(user);
    users.push(user);
}

// for (var i = 0; i < userCount; i++) {
//     var user = {};
//     // have the user do it themselves
//     user.name = prompt('Enter User name: ');
//     user.hp = prompt('Enter user hp: ');
//     console.log(user);
//     users.push(user);
// }

//output each user to console
console.log(user.name + user.hp);