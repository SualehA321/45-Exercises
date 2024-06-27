var guestList = ["Hassan", "Umer", "Eiazl", "Ali"];
var dontCome = guestList[1];
console.log(dontCome, "Nahi ahh sakhta");
guestList.splice(1, 1, "Mustafa");
guestList.forEach(function (guest) { return console.log("Assalam-0-Alikum ".concat(guest, ", would you like to Dinner with me?")); });
