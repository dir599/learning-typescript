/*
Classes and Objects
1) CLASS definition
2)Constructors -> Constructor are the blueprint in which we and make 
                  as many as we need that things. 
               -> for example: if i want to make plate design i design that
                  bluePrint in my machine and that prints it again in again in
                  that plate
-this
3)Access modifiers (public, private, protected)
4)Readonly properties
5)Optional properties
6)Parameter properties
7)getters and setters
8)static member
9)Abstract classes and methods
*/

class Device {
  name = "lg";
  price = 1200;
}
let d1 = new Device();
console.log(d1);

// Constructor
class carMaker {
  // name: string
  // price : number
  // model: string
  constructor(
    public name: string,
    public price: number,
    public model: string,
  ) {
    // this.name = name
    // this.price = price
    // this.model = model
  }
}
let b1 = new carMaker("milton", 1200, "hero");
let b2 = new carMaker("maruti", 200, "mercedies");
console.log(b1);
console.log(b2);

/*
 this -> it is used in regular function not in arrow function
        this refers to the current object
*/
class Abcd {
  name = "dirag";

  changeName() {
    // if we create anything in method inside method can access.
    let a;
    a = "mango";
    this.name;
    this.changeLastName();
  }
  changeLastName() {
    console.log("last name");
  }
}

// public and private access Modifier

// duck and quack structure

type person = {
  name: string;
};

const infoPerson = {
  name: "dirag",
  age: 22,
};

function greet(people: person) {
  console.log(people.name);
}

console.log(greet(infoPerson));

// UTILITIES TYPES
// 1)PARTIAL
// 2)Required
// 3)record
// 4)test

type animal = {
  name: string;
  age: number;
};

const animalInfo = (info: Partial<animal>) => {
  console.log(`Updating animalInfo`, info);
};

animalInfo({ age: 21 });
animalInfo({ name: "cow" });
animalInfo({});

// In this example we learn about Partial<T> which accept the partial value and empty obj can be passed which is its disadvantage.

type pencil = {
  name?: string;
  amount?: number;
};

const pencilInfo = (amt: Required<pencil>) => {
  console.log("update the pencil", amt);
};

pencilInfo({name: "doms", amount: 21 });
