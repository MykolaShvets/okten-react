import {IUserInterface} from './interfaces/user.interface'

const user: IUserInterface = {
    name: "Max",
    age: 18,
    gender: 'Male'
}


function sum(a: number, b: number): number {
    return a + b
}


function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: Partial<IUserInterface>, inc: number): Partial<IUserInterface> {
    someUser.age += inc
    return someUser
}


console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)
console.log(user);
