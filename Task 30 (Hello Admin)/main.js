// Creating a Array.
var userNames = ["Sualeh", "Umer", "Zeeshan", "Admin", "Ali"];
// Using Function Loop on Array.
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you logging in again."));
    }
});
