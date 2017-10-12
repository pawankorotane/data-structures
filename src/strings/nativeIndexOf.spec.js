'use strict';

import {expect} from 'chai';

import nativeIndexOf from './nativeIndexOf';

describe('Native index of implementation', () => {
    it('should find the sub string in the string ', () =>{
        expect(nativeIndexOf('hello','ll')).to.equal(2);
    });
});