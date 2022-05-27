"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
// Doesn't show errors with a reassignment of type
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
