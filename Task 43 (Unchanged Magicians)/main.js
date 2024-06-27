// Define the function to show magicians name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through.map() it will modify array.
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names.
var magician_names = ["Sualeh", "Harry Poter", "Ali"];
// Making a copy of Orignal array through . slice() function.
var copy_magician_names = magician_names.slice();
// Modify by the copied array to include "The Great" with their names.
var copy_great_magicians = make_great(copy_magician_names);
// Show both array orignal and copied.
// Orignal.
console.log("Orignal Array\n");
show_magicians(magician_names);
// Copied.
console.log("Copied Array\n");
show_magicians(copy_great_magicians);
