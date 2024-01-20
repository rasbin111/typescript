interface User{
    name: string,
    age: number, 
    isDisciplined: boolean
}

class User{
    name: string;
    age: number;
    isDisciplined: boolean;

    constructor(name: string, age: number, isDisciplined: boolean){
        this.name = name;
        this.age = age;
        this.isDisciplined = isDisciplined;
    }

    printInfo(){
        console.log("User Info")
        console.log(`Name: ${this.name}`)
        console.log(`age: ${this.age}`)
        console.log(`isDisciplined: ${this.isDisciplined}`)

    }
}

let userOne: User = new User("Shivaji Thapa", 32, true)
userOne.printInfo()