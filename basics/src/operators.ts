/* ?. operator */
let student_one = {
    name: "rasbin",
    parents: {
        father: "ramkrishna",
        "mother": "sita"
    },
    address: "Bhimeshwor - 05, Mati, Dolakha"
}

let student_two = {
    name: "rasbin",
    address: "Bhimeshwor - 05, Mati, Dolakha"
}


function printInfo(student: any){
    console.log(`Name: ${student.name}`)
    console.log(`Address: ${student.address}`)
    if (student?.parents?.father){
        console.log(`Father: ${student.parents.father}`)
    }
    else{
        console.log(`Father: Not mentioned`)
    }
}

// printInfo(student_one)
// printInfo(student_two)

/* ?? operator */

function personDetailGen(name: string, address: string, age: number | undefined=undefined){
    let person_detail = {
        name,
        age: age ?? 30, // age or default value 30
        address
    }
    return person_detail
}

let p1 = personDetailGen("ramji", "mati, dolakha", 51)
console.log(p1)

let p2 = personDetailGen("ankeet", "mati, dolakha")
console.log(p2)