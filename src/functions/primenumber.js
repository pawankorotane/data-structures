'use strict';

/**
 * JavaScript function that accepts a number as a parameter and check the number is prime or not
 */
export default (number) => {
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}