const ananimus = 'ananimus';
const myAge = 34;
// returns string
function getMyName (name: string = ananimus): string {
	return name;
};
// returns number
function getMyAge (age: number): number {
	return age;
};
// returns nothing
function logger (value: string): void {
	console.log(value);
};
// returns sum
function add (num1: number, num2: number): number {
	return num1 + num2;
};
let sum: (a: number, b: number) => number;
sum = add;
// arrow function
const arrowFunc = (x: number, y: number): number => {
	return x + y;
};
console.log('********* THIS IS FUNCTIONS FILE *********');
console.log('this is getMyName', getMyName());
console.log('this is getMyAge', getMyAge(myAge));
logger('this is logger and it returns nothing');
logger(`this is sum ${sum(2,2)}`);
logger(`this is arrowFunc ${arrowFunc(5,2)}`);