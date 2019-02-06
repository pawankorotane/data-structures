'use strict';

import { expect, assert } from 'chai';
import palindrome from './palindrome';

describe('palindrome function', () => {
    it('should check if string is palindrome', () => {
        expect(palindrome('madam')).to.be.true;
    });

    it('should return false if string is not palindrome', () => {
        expect(palindrome('wwwrwewdewfwf')).to.be.false;
    });

    it("Should return true", () => {
        assert.equal(palindrome("Cigar? Toss it in a can. It is so tragic"), true);
    });

    it("Should return false", () => {
        assert.equal(palindrome("sit ad est love"), false);
    });
});