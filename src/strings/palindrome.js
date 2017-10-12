'use strict';
/**
 * JavaScript function that checks whether a passed string is palindrome or not
 */

export default (str) =>{
    if(str.length === 0 || str === '') return false;
    return (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')); 
}