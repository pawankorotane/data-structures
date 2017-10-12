'use strict';


export default function findOccurance(string, search){
    let pos =  string.indexOf(search), count = 0;
    while(pos !== -1){
        count++;
        pos = string.indexOf(search, pos + 1);
    }
    return count;
}