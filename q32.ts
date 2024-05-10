/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let newName: string[] = ["admin", "ayan", "hamza", "hammad", "areeb"];
let new_users: string[] = ["huzzi", "jawad", "faizan", "sufi", "bilal"];


// Function to check if username is available
function isUsernameAvailable(username: string): boolean {
    const lowercase_current_users: string[] = newName.map(user => user.toLowerCase());
    return !lowercase_current_users.includes(username.toLowerCase());
}

// Loop through new_users to check availability
for (const new_user of new_users) {
    if (isUsernameAvailable(new_user)) {
        console.log(`The username '${new_user}' is available.`);
    } else {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    }
}
