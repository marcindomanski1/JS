var sum = (function add(a, b) {
    console.log('invoke function');
    var sum = a + b;
    return sum;
})(2, 2);
console.log(sum);

/*
(function add(a, b) {
    console.log('invoke function');
    var sum = a + b;
    return sum;
})(2, 2); */