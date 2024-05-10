/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
function show_magicians(magicians) {
    magicians.forEach((function (name) { return console.log(name); }));
}
var name_magicaian = ["huzzi", "billa"];
show_magicians(name_magicaian);
function modifies(magicians) {
    return magicians.map(function (name) { return "this is ".concat(name_magicaian); });
}
var magicians = [
    "huzaifa", "billi", "fazi"
];
var Great_magishon = modifies(magicians);
show_magicians(Great_magishon);
var one_magciaine_copy = magicians.slice();
var name_magic = show_magicians(one_magciaine_copy);
console.log("n/origanal array");
show_magicians(Great_magishon);
console.log("n/copy array");
show_magicians(magicians);
