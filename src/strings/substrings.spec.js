'use strict';

import { expect} from 'chai';
import substrings from './substrings';

describe('substring function', ()=>{
    it('should generate all the sub string combinations of a string', ()=>{
     expect(substrings('dog')).to.deep.equal(['d','o','do','g','dg','og','dog']);
    });
});