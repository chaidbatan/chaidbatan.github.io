// file_name sum_of_multiples.js

/* Given a number, find the sum of all the unique multiples of particular numbers up to but not including that number.

If we list all the natural numbers below 20 that are multiples of 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18.

The sum of these multiples is 78.
*/
/* function sumOfMultiples(number, factors) {
    var sum = 0;
    for (var x = 0; x < number; x++) {
        if (x % factors[0] === 0 || x % factors[1] === 0 || x % factors[2] === 0) {
            sum += x;
        }
    }
    return sum;
}
*/
function sumOfMultiples(number, factors) {
    var sum = 0;
    
    for (var x = 0; x < factors.length; x++) {
        if (factors[x] % factors[x] === 0) {
            if 
            sum += i;
        }
    }
    return sum;
}

module.exports = sumOfMultiples;