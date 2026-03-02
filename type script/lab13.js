//lab 13  task1
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var obj1 = new Student("kundana", 20);
console.log(obj1.name, obj1.age);
//lab 13 task2
var Student1 = /** @class */ (function () {
    function Student1(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    Student1.prototype.showRoll = function () {
        console.log(this.roll);
    };
    return Student1;
}());
var obj2 = new Student1("kundana", 20);
obj2.showRoll();
console.log(obj2.roll);
