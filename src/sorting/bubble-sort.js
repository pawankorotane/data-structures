"use strict";

/**
 * The bubble sort is one of the slowest sorting algorithms, 
 * but it is also one of the easiest sorts to implement.
 */

export default class BubbleSort {

    constructor() {
        
    }

    sort(arr) {
        let numElements = arr.length;
        for (let outer = numElements; outer >= 2; --outer) {
            for (let inner = 0; inner <= outer - 1; ++inner) {
                if (arr[inner] > arr[inner + 1]) {
                    this._swap(arr, inner, inner + 1);             
                }
            }
        }
        return arr;
    }

    _swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}