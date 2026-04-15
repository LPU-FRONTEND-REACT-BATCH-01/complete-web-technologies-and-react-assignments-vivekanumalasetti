// Primitive Types
let num: number = 10;
let big: bigint = 21n;
let str: string = "Hello, TypeScript!";
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;
let sym: symbol = Symbol("unique");

// any vs unknown
let a: any = "Hello";
let b: unknown = 21;

// any allows anything (unsafe)
a = 10;
console.log(a); // no error

// unknown is safer
if (typeof b === "string") {
    console.log(b.toUpperCase());
}

// Arrays
let arrNumbers: number[] = [32, 43, 54, 65, 76];
let arrStrings: string[] = ["hello"];

// Tuple
let tuple1: [number, string, boolean] = [32, "hello", true];

// Tuple with push (allowed but risky)
const tuple2: [number, string] = [21, "33"];
tuple2.push("Hi" as any); // TS allows push but breaks strict tuple structure

console.log(tuple2); // [21, "33", "Hi"]