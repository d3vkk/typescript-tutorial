// Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";
// Can assign value of different type
x = true;

// Arrays
let ids: number[] = [6, 5, 8, 4, 5];
let arr: any[] = [5, true, "Bye World"];

// Tuples - specifies multiple types in a specific order
let person: [number, string, boolean] = [9, "Country", false];
// Tuple Array
let employee: [number, string][] = [
  [1, "John"],
  [2, "Sarah"],
  [3, "Connor"],
];

// Union - stores either, or type of a value
let pid: string | number = 22;

// Enum - short for enumerated types. Holds a set of constant values
enum Direction1 {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

enum Direction2 {
  Up = 1, // automatically updates the rest of the values
  Down, // 2
  Left, // 3
  Right, // 4
}

enum Direction3 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
// Less legibility
const cars: {
  quantity: number;
  plate: string;
} = {
  quantity: 11,
  plate: "FGH324J",
};

// More legibility with type
// Types are mostly used with objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Bob",
};

// Types can be used with primitives and unions unlike Interfaces
type Point = number | string;
const p1: Point = 1;

// Type Assertion - Assert different type to variable
let cid: any = 1;
// let customerId = <number>cid; // first way
let customerId = cid as number; // second way

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void functions
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number; // readonly behaves like a constant after first value assignment
  name: string;
  age?: number; // ? - makes it optional
}

const user1: UserInterface = {
  id: 1,
  name: "Bob",
};

