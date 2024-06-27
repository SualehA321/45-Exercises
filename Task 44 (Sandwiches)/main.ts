//define a function with a rest parameter that accept items arguments presenting our sandwiches
function makeSandwiches(...items: string[]){
console.log("\n making a sandwiches with the following items: \n");
items.forEach(singleitems => console.log(singleitems));
console.log("\nNow Enjoy Sandwich\n")
}
//call the function 3 times with 3 different number of arguments
makeSandwiches("chicken","cheese","mayo","egg");
makeSandwiches("bread","butter");
makeSandwiches("bread","butter","chicken","cheese","mayo","egg","tomato","luttuce");
