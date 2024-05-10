// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let guestArray:string[] = [" ameen alaam"," bilal "," manal rana"];
let guestNotaAttent: string = "manal rana";
console.log(guestNotaAttent + " is can not attent the dinner ");

let newGuest: string = " zia khan";
guestArray[guestArray.indexOf(guestNotaAttent)] = newGuest;

guestArray.map((items) =>
    console.log("friend " + items + "you are my bestfriend please come to dinner")
 );






