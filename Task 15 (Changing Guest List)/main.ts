let guestList = ["Hassan","Umer", "Eiazl", "Ali"];

let dontCome = guestList[1];

console.log(dontCome, "Nahi ahh sakhta")

guestList.splice(1, 1, "Mustafa")

guestList.forEach(guest => console.log(`Assalam-0-Alikum ${guest}, would you like to Dinner with me?`));