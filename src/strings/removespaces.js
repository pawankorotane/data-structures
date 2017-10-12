'use strict';

export default (str) => {
    str = str.trim();
    let strLength = str.length;
    let result = '';
    for (let i = 0; i < strLength; i++) {
        result += (str[i] == ' ' && str[i + 1] == ' ') ? '' : str[i];
    }
    return result;
}
