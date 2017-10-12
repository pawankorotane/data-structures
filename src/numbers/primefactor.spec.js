'use strict';

import { expect } from 'chai';
import primefactor from './primefactor';

describe('primefactor function', () => {
    it('should count the prime factor of a number', () => {
        expect(primefactor(12)).to.be.deep.equal([2,2,3]);
    });
});