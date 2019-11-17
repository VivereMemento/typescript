var ananimus = 'ananimus';
var myAge = 34;
// returns string
function getMyName(name) {
    if (name === void 0) { name = ananimus; }
    return name;
}
;
// returns number
function getMyAge(age) {
    return age;
}
;
// returns nothing
function logger(value) {
    console.log(value);
}
;
// returns sum
function add(num1, num2) {
    return num1 + num2;
}
;
var sum;
sum = add;
// arrow function
var arrowFunc = function (x, y) {
    return x + y;
};
console.log('********* THIS IS FUNCTIONS FILE *********');
console.log('this is getMyName', getMyName());
console.log('this is getMyAge', getMyAge(myAge));
logger('this is logger and it returns nothing');
logger("this is sum " + sum(2, 2));
logger("this is arrowFunc " + arrowFunc(5, 2));
//# sourceMappingURL=functions.js.map