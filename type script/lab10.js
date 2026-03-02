//lab 10 task1
var user = {
    id: 101,
    name: "Kundana",
    age: 20
};
console.log(user.id);
console.log(user.name);
console.log(user.age);
function add(d) {
    console.log(d.a + d.b);
}
function multiply(d) {
    console.log(d.a * d.b);
}
add({ a: 10, b: 20 });
multiply({ a: 20, b: 20 });
