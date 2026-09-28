/*
Interface and type Aliases
  1)Defining interfaces
    ->An Interface in TS is a way to define the structure(shape) of an object.
    ->It tells you what properties an object should have and what types those properties should be.
  2)using interfaces to define object shapes
  3)Extending interfaces
  4)type aliases ->
  5)Intersection types
*/

// 1) examples
interface Users {
    name: string,
    age: number
}

function userInfo(obj: Users){
  return `My name is ${obj.name}. My age is ${obj.age}.`
}

userInfo({name: "Dirag", age: 21} )

interface Student {
    name: string,
    roll: number
}

function studentInfo(hello: Student){
    return `Student name is ${hello.name} and roll is ${hello.roll}`
}
console.log(studentInfo({
    name: "Sanaj",
    roll: 12
}))

/*
 In the upper example we accept the User and Student which is object and that hello and obj are parameter. 
We are telling then that hello and obj are just like Student and User
*/

// 2)Extending interface

interface User {
    name: string,
    email: string
}

interface Admin extends User {
    role: string
}

function extendFunction(extend: Admin){
    return `${extend.name}, ${extend.email}, ${extend.role}`
}

console.log(extendFunction({
    name: "John",
    email: "John@gmail.com",
    role: "user"
}))

/*
 1)In here Admin can have properties of User(obj) but User doesn't have the prop of Admin.
 2)If we make two same types of interface then they will merge.
 eg: If one interface has properties of name and same interface name have properties of age than both of them have properties of name and age.
 */ 

//  3)type aliases  ->A type alias allows you to give a name to a type using the type keyword.

type arg  = string | null
function abcde(obj: arg){

}
abcde("dirag")
/*
in this example we learn that if we want function which has only value of string or null we can use this type aliases
*/ 


