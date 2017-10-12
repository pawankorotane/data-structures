'use strict';

export default function nativeIndexOf(string, search, index) {
    let i = index || 0, count = 0, idx = 0;
    for (; i < string.length; i++) {
        if (string[i] === search[count]) {
            count++;
        } else {
            count = 0;
        }

        if (count == 0) {
            idx = i + 1;
        } else if (count == search.length) {
            return idx;
        }
    }
    return -1;
}