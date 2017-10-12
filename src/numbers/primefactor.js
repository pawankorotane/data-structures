'use strict';
/**
 * Function to find the prime factor of the number
 */
export default (n) =>  {
    var factors = [];

    // Print the number of 2s that divide n
    while (n % 2 == 0) {
        factors.push(2);
        n = n / 2;
    }

    // n must be odd at this point. So we can skip one element (Note i = i +2)
    for (var i = 3; i * i <= n; i = i + 2) {
        // While i divides n, print i and divide n
        while (n % i == 0) {
            factors.push(n);
            n = n / i;
        }
    }

    // This condition is to handle the case when n is a prime number
    // greater than 2
    if (n > 2) {
        factors.push(n);
    }
    return factors;
}