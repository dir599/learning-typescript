
/*
typeNarrowing: means telling TS which specific type a value is at a particular point in your code
              1) specially useful with union types
              2) most common narrowing techniques you'll learn
                typeof -> primitive types
                instanceof -> classes -> mainly use it when you have classes and a 
                                         variable could be an instance of different
                in -> object properties
                === -> exact values/types


note: we use typeNarrowing when we don't know the exactly what type a
      value is, usually because you have a union type
*/

function getChai(kind: string | number){
   if(typeof kind === "string"){
    return `making ${kind} chai`
   }
   return `chr order: ${kind}`
}

function greet(hello: string | number){
    if(typeof hello === "number"){
        return `hello 123 ${hello} `
    }
    return `hello in string ${hello}`

}

console.log(greet("hey"));



// In class

class Car {
    drive(){
        console.log("Drive a car.")
    }
}
class Bike {
    ride(){
        console.log("Ride a bike");
        
    }
}

function vehicle(start: Car | Bike){
    if( start instanceof Car){
      start.drive()
    }
    else{
        start.ride()
    }
}

// for object

type chaiOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj: any): obj is chaiOrder{
    return (
        typeof obj === "object" &&
         obj !== null && 
         typeof obj.type === "string" &&
         typeof obj.sugar == "number"
    )
}

function serveOrder(item: chaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return (`string is ${item}`)
}
console.log(serveOrder("dirag"))
const order = {
    type: "madka",
    sugar: 2
}

console.log(serveOrder(order));

