
enum Direction {
  Up,    
  Down,  
  Left,  
  Right  
}

enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed  = "FAILED"
}


function printStatusOrDirection(value: Direction | Status): void {
  if (typeof value === "number") {
    console.log(`Direction chosen: ${Direction[value]}`);
  } else {
    console.log(`Status is: ${value}`);
  }
}

printStatusOrDirection(Direction.Up);     
printStatusOrDirection(Status.Pending);   
