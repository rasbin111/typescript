type gender = "male" | "female" | "others"

type salary = 10000 | 20000 | 30000

interface Employee{
    fullname: string,
    gender: gender,
    salary: salary
}

let emp1: Employee = {
    fullname: "roshan thapa",
    gender: "male",
    salary: 20000
}

// console.log(emp1)

function getLength(obj: string | number[]){
    return obj.length
}

console.log(getLength([10, 20, 30]))
console.log(getLength("RASBIN"))