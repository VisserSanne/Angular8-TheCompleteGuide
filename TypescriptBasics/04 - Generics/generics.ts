// Generics are about the types that can hold/use several types

let numberArray: Array<number>;
let stringArray: Array<String>;

// This definition will give an error because the type is numbers (within the array)
// numberArray = ['test'];

// This won't give an error because the items are type number
numberArray = [1, 2, 3];

// But in this case it only accepts strings (within the array)
stringArray = ["test", "hurdiedur"];

// They are both arrays but the both accept different types!
