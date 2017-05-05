'use strict';
import {expect} from 'chai';

import addSum from './add-sum';

describe('add sum function', () => {
    it('should find two array elements in an array that add up to a number', () => {
        expect(addSum([1,2,3,4,5], 9)).to.be.deep.equal([3,4]);
    });
});
