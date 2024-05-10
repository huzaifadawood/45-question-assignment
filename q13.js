// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var car = ["furtunur", "f1", "v8", "rangrover"];
for (var _i = 0, car_1 = car; _i < car_1.length; _i++) {
    var transport = car_1[_i];
    console.log("I would like to own a ".concat(transport));
}
// const favoriteTransportation: string[] = ["Tesla Model S", "Ducati Panigale V4", "BMW M5", "Gulfstream G650"];
// for (const transport of favoriteTransportation) {
//     console.log(`I would like to own a ${transport}.`);
// }
