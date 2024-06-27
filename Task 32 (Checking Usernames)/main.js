// Array of Current Users.
var current_users = ["Sualeh", "Umer", "Mustafa", "Zain", "Ezal"];
// Array Of New Users.
var new_users = ["Hamza", "Zain", "Ali", "Usman", "Ezal"];
// Loop through new_users to check for usernames avaibility.
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition variable.
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //    Print Differnet message using If-Else statement.
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
