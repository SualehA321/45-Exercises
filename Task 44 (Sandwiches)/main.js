//define a function with a rest parameter that accept items arguments presenting our sandwiches
function makeSandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sandwiches with the following items: \n");
    items.forEach(function (singleitems) { return console.log(singleitems); });
    console.log("\nNow Enjoy Sandwich\n");
}
//call the function 3 times with 3 different number of arguments
makeSandwiches("chicken", "cheese", "mayo", "egg");
makeSandwiches("bread", "butter");
makeSandwiches("bread", "butter", "chicken", "cheese", "mayo", "egg", "tomato", "luttuce");
