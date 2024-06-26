// 5. /*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/


function createCar(manufacturer, model, ...args) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Loop through the rest of the arguments (if any) and add them to the car object
    for (let i = 0; i < args.length; i += 2) {
        let key = args[i];
        let value = args[i + 1];
        
        car[key] = value;
    }
    return car;
}
// Example usage:
let myCar = createCar("Toyota", "carrola", "color", "blue", "year", 2024);
console.log(myCar);
