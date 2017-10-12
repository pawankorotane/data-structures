'use strict';

import {expect} from 'chai';

import findOccurance from './findOccurance';

describe('counting the occurances of the character', () => {
    it('should a return the longest word ', () =>{
        expect(findOccurance('Web Development Tutorial', 'e')).to.equal(4);
    });
});