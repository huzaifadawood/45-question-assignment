// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestArray: string[] = [" ameen alaam", " bilal ", " manal rana" ,"huzaifa"];

console.log("Unfortunately, the dinner table won't arrive in time. We can only invite two people for dinner.");
 // Removing guests until only two names remain
while(guestArray.length >2)
    {
        const removedGuest: string = guestArray.pop()!;
        console.log(`sorry, ${removedGuest}, i can;t invite you to dinner`)
    }
// Inviting the two remaining guests
for(const guest of guestArray){
    console.log(`${guestArray}, you are still invite a dinner`)
}
// Clearing the list
guestArray.splice(0,guestArray.length)
console.log("The guest list is now empty:",);



