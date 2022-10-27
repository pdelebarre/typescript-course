"use strict";
function getRandomElement(list) {
    var idx = Math.floor(Math.random() * list.length);
    return list[idx];
}
var elt = getRandomElement(["2", "5", "176"]);
console.log("elt", elt);
console.log(getRandomElement(["2", 5, true]));
