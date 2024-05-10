// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestArray = [" ameen alaam", " bilal ", " manal rana"];
var guestNotaAttent = "manal rana";
var newguesst = "huzaifa";
// guestArray[guestArray.indexOf(guestNotaAttent)] = newguesst;
// console.log(guestArray);
// guestArray.map((items) => console.log("dear " + items + ", i fount bigger dinner table so i am invited more people "));
var guestBiggner = "umair";
guestArray.unshift(guestBiggner);
// console.log(guestArray)
var middleGuesst = "laraib";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuesst);
// console.log(guestArray)
guestArray.push("jawad");
// console.log(guestArray)
guestArray.map(function (items) { return console.log("dear ".concat(items, ", you are invited in the more people catogory on dinner")); });
