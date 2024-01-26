interface Person {
  fullname: string,
  age: number,
  address: string
}

let personOne: Person = {
  fullname: "Srijan Karki",
  age: 23,
  address: "Bhimeshwor - 05, Dharmaghar, Dolakha"
};

console.log(personOne);

type Student = {
  fullname: string,
  roll: number,
  gpa: number,
  parentsName: string
}

let studentOne: Student = {
  fullname: "Shisir Karki",
  roll: 1,
  gpa: 4,
  parentsName: "Dhurba Karki"
}

console.log(studentOne)

