"use strict";
import { expect, assert } from 'chai';

import BubbleSort from './bubble-sort';
describe("Bubble Sort", () => {
    const bubbleSort = new BubbleSort;

    it('should have sort function', () => {
        assert.isFunction(bubbleSort.sort);
    });  
    it('should sort the array', () => {
        var arr = [23, 56, 6, 7, 8, 4, 89];
        var result = [4, 6, 7, 8, 23, 56, 89];
        expect(result).to.deep.equal(bubbleSort.sort(arr));

    });
});