import { expect } from 'chai';
import Stack from './stack';

describe('Stack Class', () =>{
  var stack  = new Stack;
  
  
  it('should add element to the stack', ()=>{
    stack.push(1);  
    expect(stack.dataStore.length).to.equal(1);
  });

  it('should check stack is empty or not', () =>{
    expect(stack.isEmpty()).to.equal(true);
  }); 

  it('should remove element from the stack', () =>{
    expect(stack.isEmpty()).to.equal(true);
  });
  afterEach(function() {
    stack.dataStore = [];
  });
});