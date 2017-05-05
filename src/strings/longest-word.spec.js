'use strict';

import {expect} from 'chai';

import longestWord from './longest-word';

describe('longest word', () => {
    it('should return the longest word ', () =>{
        expect(longestWord('Web Development Tutorial')).to.equal('Development');
    });
});