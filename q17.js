// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestArray = [" ameen alaam", " bilal ", " manal rana", "huzaifa"];
console.log("Unfortunately, the dinner table won't arrive in time. We can only invite two people for dinner.");
// Removing guests until only two names remain
while (guestArray.length > 2) {
    var removedGuest = guestArray.pop();
    console.log("sorry, ".concat(removedGuest, ", i can;t invite you to dinner"));
}
// Inviting the two remaining guests
for (var _i = 0, guestArray_1 = guestArray; _i < guestArray_1.length; _i++) {
    var guest = guestArray_1[_i];
    console.log("".concat(guestArray, ", you are still invite a dinner"));
}
// Clearing the list
guestArray.splice(0, guestArray.length);
console.log("The guest list is now empty:");
// // Initial list of guests
// let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
// // Message indicating only two guests can be invited
// console.log("Unfortunately, the dinner table won't arrive in time. We can only invite two people for dinner.");
// // Removing guests until only two names remain
// while (guests.length > 2) {
//     const removedGuest: string = guests.pop()!;
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }
// // Inviting the two remaining guests
// for (const guest of guests) {
//     console.log(`${guest}, you're still invited to dinner.`);
// }
// // Clearing the list
// guests.splice(0, guests.length);
// console.log("The guest list is now empty:", guests);
