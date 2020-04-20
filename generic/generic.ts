function genericGetter<T>(data:T):T {
	return data;
};

let newGenericFunction: <T>(d:T) => T = genericGetter;

class GenericNumber<T> {
	zeroValue: T;
	add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return +x + +y; };
myGenericNumber.add('2', '2');

console.log('********* THIS IS GENERID FILE *********');
console.log(newGenericFunction<string>('WFT').length);
console.log(newGenericFunction<number>(100).toFixed(2));
// console.log(multiplyByTwo.getResult());