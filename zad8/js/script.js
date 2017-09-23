var counter = localStorage.getItem('counter') !==null ? localStorage.getItem(counter) : 0;

//var counter = 0; //

function addUsername(name) {
    var index = 'person' + counter;
    localStorage.setItem(index, name);
    counter++;
    localStorage.setItem('counter', counter);
}