excludedName = ['poopface', 'idiot'];
var isExcluded = excludedName.find(function (excluded) {
    return excluded === name;
});

// arrow function
var newIsExcluded = excludedName.find((excluded) => excluded === name);

if (name && isNaN(name) && !isExcluded) {
    URLSearchParams.name = name;
    var hp = prompt('Enter your hp: ');
    console.log(!!hp);
    console.log(typeof hp);
    console.log(parseInt(hp));
}