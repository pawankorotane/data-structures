'use strict';

/**
 * JavaScript function that accepts a number as a parameter and check the number is prime or not
 */
export default (number) => {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 == 0 || number % 3 == 0) return false;
    for (var i = 5; i * i <=number; i = i + 6) {
        if (number % i == 0 || number % (i + 2) == 0)
            return false;
    }
    return true;
}