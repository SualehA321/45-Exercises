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
// Call make_great function to modify magicians names.
var great_magicians = make_great(magician_names);
// Call show magicians that show modified list of magicians.
show_magicians(great_magicians);
