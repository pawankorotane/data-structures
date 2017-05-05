'use strict';

import { expect } from 'chai';
import primenumber from './primenumber';

describe('prime number function', () =>{
    it('should check number is prime or not', ()=>{
        expect(primenumber(31)).to.be.true;
        expect(primenumber(30)).to.be.false;
    });
});