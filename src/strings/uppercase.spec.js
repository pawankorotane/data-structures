'use strict';

import { expect} from 'chai';
import uppercase from './uppercase';

describe('uppercase function', ()=>{

    it('should convert the first letter of the string to upper case', ()=>{
        expect(uppercase('the quick brown fox')).to.equal('The Quick Brown Fox');
    });
});