'use strict';
/**
 *  Find two array elements in an array that add up to a number
 */

export default (arr, weight) => {

    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        for (var j = i + 1; j < arrLength; j++) {
            if (arr[i] + arr[j] == weight) {
                return [i, j];
            }
        }
    }
    return -1;
}
