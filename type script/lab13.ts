//lab 13  task1
class Student{
    public name: string;
    public age: number;
    constructor(name: string, age:number){
        this.name=name;
        this.age=age;
    }
}
let obj1=new Student("kundana",20);

console.log(obj1.name,obj1.age)

//lab 13 task2
class Student1{
    public name:string;
    private roll:number;
    constructor(name:string,roll:number){
        this.name=name;
        this.roll=roll;
    }
    showRoll(){
        console.log(this.roll)
    }
}
let obj2=new Student1("kundana",20);
obj2.showRoll();
//console.log(obj2.roll) error: Property 'roll' is private and only accessible within class 'Student1'.
