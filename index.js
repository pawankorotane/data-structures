class Index {
    constructor(){
        this.name = '';
    }

    static get(){
        return this.name;
    }
    static set(name){
        this.name = name;
    }
}



Index.set("Pawan Korotane");

console.log(Index.get());