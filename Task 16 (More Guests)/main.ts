// Creating a GuestList Array.
let guestList = ["Hassan", "Umer", "Eizal", "Ali"];

// Making Variable for those guest who cant come.
let dontCome =guestList[1];

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
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");

console.log("Updated List of our Guests");

guestList.forEach(oneguest => console.log(`Assalam-0-Alikum ${oneguest}, would you like to dinner with me`));