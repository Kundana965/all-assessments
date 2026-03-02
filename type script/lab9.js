//lab9 task1
function movingDirection(directions) { console.log("moving" + { directions: directions }); }
movingDirection("up");
//lab 9 task2
function getValue(formatValue) {
    if (typeof formatValue === "string") {
        return (formatValue.toUpperCase());
    }
    else {
        return (Math.round(formatValue));
    }
}
console.log(getValue(23.5));
console.log(getValue("kundana"));
