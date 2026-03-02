//lab 10 task1

interface User {
  readonly id: number;   
  name: string;          
  age?: number;   
}       


const user: User = {
  id: 101,
  name: "Kundana",
  age: 20
};


console.log(user.id);    
console.log(user.name);  
console.log(user.age);   
//user.id = 202; //doesnot change value

//lab 10 task2
interface Calculator{
    a:number,
    b:number
}
function add(d: Calculator){
   console.log(d.a+d.b) 
}
function multiply(d:Calculator){
    console.log(d.a*d.b)
}
add({a:10,b:20})
multiply({a:20,b:20})