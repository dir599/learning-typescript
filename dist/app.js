"use strict";
// Basic types
/*
1)Primitive types(number, boolean, string)
2)Arrays
3)Tuples
4)Enums
5)Any, unknown, void, null, undefined, Never
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ARRAYS
let arr = [1, 3, 4, { name: "Dirag" }];
// In this arr it can be number or sting. If you want to stop it we have to define the arr
let arr1 = [1, 2, 3, 6];
// TUPLES
// A tuple is an array where you specify the exact type and position of each element.
// Normal array
let user = ["dirag", 25];
// here the order isn't strictly defined you can do [25,"dirag"]
// tuples example
let user1 = ["dirag", 22];
console.log(user1);
// Enums (enumerations)
// Instead of repeatedly using values like "admin", "user", you can give them names
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["guest"] = 2] = "guest";
})(Role || (Role = {}));
//we can use this Admin in here with ease
let role = Role.Admin;
var StatusCode;
(function (StatusCode) {
    StatusCode["NOTFOUND"] = "not found status code 404";
    StatusCode["INTERNALERROR"] = "500 is internal error";
})(StatusCode || (StatusCode = {}));
let status = StatusCode.NOTFOUND;
//1) Any -> doesn't define what kind of value is this like number, boolean
let a;
a = "math";
a = 12;
// doesn't give error #a.toUpperCase(); fail to number so ts ignore all the. checker
//2) Unknown -> we doesn't define its type first we define it when we need it
let b;
b = 12;
b = "dirag";
if (typeof b === "string") {
    b.toUpperCase();
}
// 3)Void -> if there is not return we use void
function abcd() {
    console.log("discussion on void");
}
abcd();
// if used return we define the return type
function abcde() {
    return true;
}
abcde();
// 4) Null -> there is intentionally. no value
let d;
d = "dirag";
// 5)undefined -> value has not been decided
let username;
console.log(username);
// 6)Never -> never means a value that can never exist
// For example, an infinite loop:
// function forever(): never {
//   while (true) {
//     console.log("Running...");
//   }
// }
//# sourceMappingURL=app.js.map