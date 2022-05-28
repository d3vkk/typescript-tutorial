"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
// Can assign value of different type
x = true;
// Arrays
let ids = [6, 5, 8, 4, 5];
let arr = [5, true, "Bye World"];
// Tuples - specifies multiple types in a specific order
let person = [9, "Country", false];
// Tuple Array
let employee = [
    [1, "John"],
    [2, "Sarah"],
    [3, "Connor"],
];
// Union - stores either, or type of a value
let pid = 22;
// Enum - short for enumerated types. Holds a set of constant values
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
// Objects
// Less legibility
const cars = {
    quantity: 11,
    plate: "FGH324J",
};
const user = {
    id: 1,
    name: "Bob",
};
const p1 = 1;
// Type Assertion - Assert different type to variable
let cid = 1;
// let customerId = <number>cid; // first way
let customerId = cid; // second way
// Functions
function addNum(x, y) {
    return x + y;
}
// Void functions
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Bob",
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
// Classes
class Person {
    // Initializes properties of class
    constructor(id, name, age) {
        // getters
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const john = new Person(1, "John Mauja", 78);
const sarah = new Person(1, "Sarah Smith", 13);
john.register();
