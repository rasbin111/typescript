function sum(a: number, b: number): number {
    return a + b
}


// console.log(sum(10, 20))
// console.log(sum(20, 30))
interface functionUser{
    name: string,
    age: number,
    address: string
}

function createUser(name:string, birthYear:number, address:string): functionUser{
    return {
        name,
        age: 2023 - birthYear,
        address
    }
}

let userTwo = createUser("rgt", 1996, "BMP-05, Mati")
console.log(userTwo)