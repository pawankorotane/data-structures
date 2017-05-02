'use strict';

/**
 * JavaScript function that accepts a string as a parameter and find the longest word within the string
 */
export default (str) => {
    let arr = str.split(' ');
    let max = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i].length){
            max =  arr[i];
        }
    }
    return max;
}