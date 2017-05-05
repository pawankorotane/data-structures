'use strict';

/**
 * JavaScript function that accepts a string as a parameter 
 * and converts the first letter of each word of the string in upper case
 */
export default (str) => {
    let arr = str.split(' ');
    let result = [];
    arr.forEach(function (element) {
        result.push(`${element.substring(0, 1).toUpperCase()}${element.substring(1, element.length)}`);
    });
    return result.join(' ');
}