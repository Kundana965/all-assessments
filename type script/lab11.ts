//lab 11 task3
interface Student{
    name:string,
    marks:number
}
const students:Student[]=[
    {name:"kundana", marks:90},
    {name:"deepika", marks:90},
    {name:"roshini", marks:90}
]
console.log(students[0],students[1],students[2])

//lab 11 task4
type PointType={
    x:number,
    y:number
}
interface PointInterface{
    x:number,
    y:number
}
function printPoint(dt1:PointType,dt2:PointInterface){
    console.log("PointType: "+dt1.x+" "+dt1.y)
    console.log("PointInterface: "+dt2.x+" "+dt2.y)
}
printPoint({x:10,y:20},{x:30,y:40})