'use strict';

import { expect, assert } from 'chai';
import reverse from './reverse';

describe('reverse a string', () => {
    it('should reverse the string', ()=>{
        expect(reverse('abc')).to.equal('cba');
        expect(reverse('32243')).to.equal('34223');
    });

    it('should return false if string is empty', () => {
         expect(reverse('')).to.equal(false);
    });
     it('should return false if number is passed', () => {
         expect(reverse(1234)).to.equal(false);
    });
});