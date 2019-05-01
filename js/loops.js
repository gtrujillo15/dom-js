// array of fruits and add 5 fruits in the array

var fruits = ['orange', 'banana', 'strawberries', 'blueberries', 'pineapples'];
console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);

// for loop
// for(var i = 0; i < fruits.length; i++) {
//     console.log(i)
//     console.log(fruits[i])
// };

// do while
var index = 0;
// do {
//     console.log(fruits[index]);
//     index++;
// } while (index < fruits.length);

// while
// while (index < fruits.length) {
//     console.log(fruits[index]);
//     index++;
// }

// for in
fruits.foo = 'test';
for (var i in fruits) {
    console.log(i);
}

// for of
for (var i of fruits) {
    console.log(i);
}