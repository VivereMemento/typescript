var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuperUser = /** @class */ (function () {
    function SuperUser(name, job) {
        this.name = name;
        this.job = job;
        this.age = 44;
        this.isTeacher = true;
    }
    SuperUser.prototype.getAge = function () {
        console.log("this is user's age " + this.age);
        return this.age;
    };
    SuperUser.prototype.getIsTeacher = function () {
        console.log("is object a teacher - " + this.isTeacher);
        return this.isTeacher;
    };
    return SuperUser;
}());
;
var Anonim = /** @class */ (function (_super) {
    __extends(Anonim, _super);
    function Anonim(job) {
        var _this = _super.call(this, 'anonim', job) || this;
        _this.isTeacher = false;
        return _this;
    }
    return Anonim;
}(SuperUser));
;
var user = new SuperUser('WTF', 'Frontend');
var anonim = new Anonim('unemployed');
// abstract class
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.year = 2010;
    }
    Car.prototype.getCarYear = function (val) {
        console.log("this is " + val + " year " + this.year);
        return this.year;
    };
    return Car;
}());
;
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.logInfo = function (info) {
        console.log('this is info: ', info);
    };
    ;
    return Mercedes;
}(Car));
;
var car = new Mercedes('sss');
console.log('********* THIS IS CLASSES FILE *********');
console.log("this is user's name " + user.name);
console.log("this is user's job " + user.job);
user.getAge();
user.getIsTeacher();
console.log("this is anonim's name " + anonim.name);
anonim.getIsTeacher();
car.logInfo('this Mercedes');
car.getCarYear('mercedes');
console.log('this is model of car', car.model);
//# sourceMappingURL=classes.js.map