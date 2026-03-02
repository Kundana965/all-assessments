var students = [
    { name: "kundana", marks: 90 },
    { name: "depika", marks: 90 },
    { name: "roshini", marks: 90 }
];
console.log(students[0], students[1], students[2]);
function printPoint(dt1, dt2) {
    console.log("PointType: " + dt1.x + " " + dt1.y);
    console.log("PointInterface: " + dt2.x + " " + dt2.y);
}
printPoint({ x: 10, y: 20 }, { x: 30, y: 40 });
