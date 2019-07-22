// Type Infernace
let myValue: any;
myValue = 10;

let myValue1: string;
myValue1 = <string>myValue;
console.log(myValue1);

let myValue2: number;
myValue2 = myValue as number;
console.log(myValue2);

// Type Casting
let myValue3: number;
myValue3 = 10;
//console.log(myValue3);

let myValue4: string;
myValue4 = String(myValue3);
console.log(myValue4);
