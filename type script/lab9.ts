//lab9 task1



function movingDirection(directions: "up" | "down" | "left" | "right"): void {
  console.log(`moving ${directions}`);
}

movingDirection("up"); // Output: moving up


//lab 9 task2
function getValue(formatValue:number|string)
{
    if (typeof formatValue==="string"){
        return(formatValue.toUpperCase())
    }
    else{
        return(Math.round(formatValue))
    }
}
console.log(getValue(23.5))
console.log(getValue("kundana"))