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
});