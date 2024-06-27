// Making a Array of Countries and Print its Orginal Orders.
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);

// Print the Array in Alphaabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in its Orginal order.
console.log("Still in Orginal:", countriesToVisit);

// Print the Array in Reversed Order without modifying the Actual Array List.
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in its Orginal order.
console.log("Still in Orginal:", countriesToVisit);

// We have Changed the Orginal Array Order Now.
console.log("Orginal Array  Reversed:", countriesToVisit.reverse());

// Print the array to  show that it's back to its orginal order.
console.log("Back to Orginal Order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have Changed again the Orginal Array Order Now in reverse order again.
console.log("Orginal Array Reversed Again:", countriesToVisit.reverse());