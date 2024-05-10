// /*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
function show_magicians(magicians) {
    magicians.forEach((function (name) { return console.log(name); }));
}
var name_magicaian = ["huzzi", "billa"
];
show_magicians(name_magicaian);
function modifies(magicians) {
    return magicians.map(function (name) { return "this is ".concat(name_magicaian); });
}
var magicians = [
    "huzaifa", "billi", "fazi"
];
var Great_magishon = modifies(magicians);
show_magicians(Great_magishon);
