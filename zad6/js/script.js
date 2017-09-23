/* funkcja rekursywna odliczająca od 5 do 0 */

function loopToZero(x) {
    console.log(x);
    if (x <= 0) {
    return;
    }
    loopToZero(x - 1);
}
loopToZero(5);

/*z funkcją globalna*/

var x = 1;
function loopToFive(x) {
    console.log(x);
    if (x >= 5) {
        return;
    }
    loopToFive(x + 1);
}
loopToFive(x);

/* wartość początkowa jako argument funkcji */

function loop(loopFrom, loopTo) {
    console.log(loopFrom, loopTo);
    if (loopFrom >= loopTo) {
        return;
    }
    loopFrom++;
    loop(loopFrom, loopTo);
}
loop (3, 7);
