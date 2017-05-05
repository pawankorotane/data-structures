'use strict';
/**
 * Write a JavaScript function that reverse a number.
 */

export default (str) => {
    if((str === '' || str.length === 0) || typeof str === 'number') return false;
    return str.split('').reverse().join('');
}