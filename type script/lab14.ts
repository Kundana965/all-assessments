//lab14 task1
class Student{
    
    readonly id:number;
    constructor(id:number){
        this.id=id
    }

}
const obj1=new Student(506);
console.log(obj1.id)
// obj1.id=56; -> error: Cannot assign to 'id' because it is a read-only property.

//lab14 task2

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log("animal sound");
    }
}
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); 
        this.breed = breed;
    }
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}
let animal1 = new Animal("Animal");
let dog1 = new Dog("Buddy", "Golden Retriever");
console.log(animal1.name);
animal1.makeSound(); 
console.log(dog1.name, dog1.breed);
dog1.makeSound(); 
