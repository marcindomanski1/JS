function fibonacci(a, b) {
    var c = a + b;
    if (c > 100) {
        return;
    }
    console.log(c);
    fibonacci(b, c);
}

fibonacci(0, 1);


function fib(n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1){
        return 1;
    }
    var result = fib(n - 1) + fib(n - 2);
    return result;
}