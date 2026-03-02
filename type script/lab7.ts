//lab 7 task1
function greetUser(name:string, title:string){
    if(title==undefined){
        return("hello "+ name)}
    else{
        return("hello "+title+" "+name)
    }
}
console.log(greetUser("kundana",""))

//lab7 task2
const sum=(num1:number,num2:number)=>{
    console.log(num1+num2)
}
sum(3,5)
sum(4,8)