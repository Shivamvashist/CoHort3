"use strict";
//create a fn that takes another fn as an input and runs it after 1 sec.
function delayedCall(fn) {
    setTimeout(fn, 2000);
}
delayedCall(() => {
    console.log("Hello");
});
