// Creating a GuestList Array.
var guestList = ["Hassan", "Umer", "Eizal", "Ali"];
// Making Variable for those guest who cant come.
var dontCome = guestList[1];
// Printing the name of guest who cant come.
console.log(dontCome, "Nahi Ahh Sakta ho");
// Add or Remove Values from Guest List Array. 
guestList.splice(1, 1, "Mustafa");
// Message Print for Bigger Table.
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new value at starting index of array.
guestList.unshift("Faizan");
// Adding a new value at ending index of array
guestList.push("Asim");
// Adding new guest at middle index of array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
console.log("Updated List of our Guests");
guestList.forEach(function (oneguest) { return console.log("Assalam-0-Alikum ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite you two guest to dinner with me?");
// Using while-loop to remove guest from the array until only two name remain.
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitation to the last two guest on th list.
console.log("Invitations to the last 2 Guest");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ",you are still invited to dinner")); });
// Removing last two Guest from the list.
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
