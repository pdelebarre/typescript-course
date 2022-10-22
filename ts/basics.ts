import Car from "./types";

let i = Math.round(0.2345);
console.log("i", i);

let pi: number = 3.14159;

let xc90: Car = { make: "volvo", model: "xc90" };

//inference
let x = 123;
//x = "bonjour";

//any
let bidule: any = "hello";
bidule = 1;
bidule = "truc";

//functions
const square = (x: number, y: number): number => {
  return x * y;
};

let z: number = square(3, 6);

console.log("z", z);
