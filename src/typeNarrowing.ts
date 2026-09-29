/*
typeNarrowing -> is the process of taking board type(like a union of string | boolean) and 
refining it into a more. specific, predictable type inside a conditional code block

COMMON WAYS TO NARROW TYPES
1)typeof
2)instanceof
3)in
4)Equality Checks

*/ 

function getChai(kind: string | boolean){
    if(typeof kind === "string"){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`
}
console.log(getChai(true))

const  serverChai =(msg?: string)=>{
    if(msg){
        return `string ${msg}`
    }
    return `Serving default chai`
}
console.log(serverChai("Completed"))

class coffee {
    // method: serve()
    serve(){
        return `This is. coffee`
    }
}
class chai {
    serve(){
        return `This is chai`
    }
}

const getFood = (ch: coffee | chai)=>{
    if(ch instanceof coffee){
        return ch.serve()
    }
    return ch.serve()

}
console.log(getFood(new coffee()));
console.log(getFood(new chai()))


