var sum = 0;

function add(a, b) {
    var sum = a + b;
    console.log('Zmienna lokalna', sum);
    return sum;
}

console.log(sum);

add(2, 2);

console.log(sum);

add(3, 3);

console.log(sum);

