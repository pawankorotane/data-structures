export default class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    isEmpty(){
        return this.dataStore.length === 0;
    }

    pop(){
        this.dataStore.pop();
    }




}