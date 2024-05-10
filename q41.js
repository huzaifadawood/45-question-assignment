// *41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
// // 
function show_magicians(magicians) {
    magicians.forEach((function (name) { return console.log(name); }));
}
var name_magicaian = ["huzzi", "billa"
];
show_magicians(name_magicaian);
