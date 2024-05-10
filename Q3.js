/* 3. Name Cases: Store a person’s name in a variable, and then print that person’s
 name in lowercase, uppercase, and titlecase.*/
var personName = "hUzaiFa dAwoOd";
// In lowerCase
console.log("lowerCase:", personName.toLowerCase());
// In uppercase
console.log("upperCase:", personName.toUpperCase());
// In tittleCase
console.log("tittleCase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
