"use strict";
import { expect, assert } from 'chai';

import binarySearch from './binary-seach';
describe("BinarySearch", () => {
    

    it('should have sort function', () => {
        assert.isFunction(binarySearch);
    });
    it('should sort the array', () => {
        var arr = [1,5,14,20,25,37,50,56,70,74,88,95, 100];
        expect(binarySearch(arr, 35)).to.be.true;

    });
});