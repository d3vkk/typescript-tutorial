// Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";
// Doesn't show errors with a reassignment of type
x = true;

// Arrays
let ids: number[] = [6, 5, 8, 4, 5];
let arr: any[] = [5, true, "Bye World"];

// Tuples - specify multiple types in a specific order
let person: [number, string, boolean] = [9, "Country", false];
// Tuple Array
let employee: [number, string][] = [
  [1, "John"],
  [2, "Sarah"],
  [3, "Connor"],
];
