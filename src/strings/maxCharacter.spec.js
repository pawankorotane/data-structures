'use strict';
import { expect } from 'chai';

import { max } from './maxCharacter'

describe.only("Max Character", () => {
    it("Should return max character", () => {
        expect(max("Hello World!")).to.be.equal('l');
    });
});

