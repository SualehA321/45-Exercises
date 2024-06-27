function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //intialize a car object with manfacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //add additional optionns to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to create a car object
var my_car = create_car("toyota", "corrolla", "color: black", "sunroof: true", "year: 2024");
// print the variable to ensure all the information is stored.
console.log(my_car);
