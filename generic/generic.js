function genericGetter(data) {
    return data;
}
;
var newGenericFunction = genericGetter;
var Multiply = /** @class */ (function () {
    function Multiply(val) {
        this.val = val;
    }
    Multiply.prototype.getResult = function (data) {
        return this.val * data;
    };
    return Multiply;
}());
var multiplyToTwo = new Multiply(2);
console.log('********* THIS IS GENERID FILE *********');
console.log(newGenericFunction('WFT').length);
console.log(newGenericFunction(100).toFixed(2));
console.log(multiplyToTwo.getResult(5));
//# sourceMappingURL=generic.js.map