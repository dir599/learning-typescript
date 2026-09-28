// Type inference
// .Understanding type inferecne
// .Type annotations

// Type inference -> it means ts can automatically figure out the type of a variable without you explicitly the type
let username = "dirag";

// Type annotations ->it means we tell  type of variable in ts
let a: number | boolean | string;
function abcd(a: number, b: string): void {
    console.log("Learning type annotations")
}
