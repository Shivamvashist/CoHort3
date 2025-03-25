"use strict";
//retun true and false based on if a userr is 18+
// to learn - type interface
function isLegal(x) {
    if (x >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(123));
