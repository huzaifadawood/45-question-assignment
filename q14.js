// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var GuestArray = ["ameen alam", "bilal", "manal rana"];
GuestArray.map(function (items) {
    return console.log("dear: " + items + " you are invited to dinner");
});
