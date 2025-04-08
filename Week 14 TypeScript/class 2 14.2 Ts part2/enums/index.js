"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction["down"] = "Down";
    Direction["left"] = "2";
    Direction[Direction["right"] = 202] = "right";
})(Direction || (Direction = {}));
function Move(movement) {
    console.log(movement);
}
Move(Direction.right);
console.log(Direction.up);
