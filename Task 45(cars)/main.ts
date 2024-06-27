function create_car(manufacturer, model, ...options){
    //intialize a car object with manfacturer and model
    let car ={
        manufacturer: manufacturer,
        model: model,
    };
    //add additional optionns to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to create a car object
let my_car = create_car("toyota","corrolla","color: black","sunroof: true","year: 2024");
// print the variable to ensure all the information is stored.
console.log(my_car);