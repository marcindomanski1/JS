var counter = localStorage.getItem('counter') !==null ? localStorage.getItem('counter') : 0;

//var counter = 0; //

function addUsername(name) {
    var index = 'person' + counter;
    localStorage.setItem(index, name);
    incrementCounter();
}

function removeUsername(index) {
    localStorage.removeItem(index);
    }

function removeUsernameById (id) {
    var index = 'person' + id;
    localStorage.removeItem(index);
    }

function incrementCounter() {
    counter++;
    localStorage.setItem('counter', counter);
}

addUsername('John Doe');
addUsername('Jan Kowalski');
removeUsername('person1');
removeUsernameById(5);

console.log("Counter: ", counter);