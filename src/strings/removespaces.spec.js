'use strict';

import { expect } from 'chai';
import removespaces from './removespaces';

describe('remove spaces from the string', () => {

    it('should remove the spaces from the string', () => {
        expect(removespaces(" hello. how are you doing? ")).to.equal('hello. how are you doing?');
    });
});