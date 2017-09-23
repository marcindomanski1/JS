/* var car = {
    make : 'Ford',
    model : 'Mondeo'
}

console.log(car);

var carString = JSON.stringify(car);
console.log(carString);

localStorage.setItem('car', carString);
*/

/*
var carString = localStorage.getItem('car');
console.log(carString);

var car = JSON.parse(carString);
console.log(car);
*/

var index = 'car';
localStorage.removeItem(index);
