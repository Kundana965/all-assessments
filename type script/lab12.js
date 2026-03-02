var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Success"] = "SUCCESS";
    Status["Failed"] = "FAILED";
})(Status || (Status = {}));
function printStatusOrDirection(value) {
    if (typeof value === "number") {
        console.log("Direction chosen: ".concat(Direction[value]));
    }
    else {
        console.log("Status is: ".concat(value));
    }
}
printStatusOrDirection(Direction.Up);
printStatusOrDirection(Status.Pending);
