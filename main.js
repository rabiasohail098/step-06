"use strict";
// expilict casting
let car;
car = "Toyota";
car = 45.09876245678;
// car = true
//  car = undefined
// method 1
car;
console.log(typeof car);
console.log(car.toFixed(3));
//Method 2
// let newCar = (car as string) 
// method 3 
// <string>car
