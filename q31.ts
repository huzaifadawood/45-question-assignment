// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userName: string[] = [
  "admin",
  "eric",
  "shapatar",
  "joun ellia",
  "einstine",
];
userName = [];

if (userName.length === 0) {
  console.log("the list of user is not empty")
} else {
  userName.forEach((oneuser) => {
    if (oneuser === "admin") {
      console.log(`Hello ${oneuser}we need to find some user `);
    } else {
      console.log(`thank you ${oneuser}, for loggin again`);
    }
  });
}
