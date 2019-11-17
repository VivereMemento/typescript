;
var obj = {
    name: 'obj',
    getName: function () {
        console.log('this is object with interface', this.name);
        return this.name;
    }
};
;
var InterfaceUser = /** @class */ (function () {
    function InterfaceUser(name, surname, age, profession) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.profession = profession;
    }
    InterfaceUser.prototype.getFullName = function () {
        console.log("this is user's name: " + this.name + " " + this.surname);
        return this.name + " " + this.surname;
    };
    ;
    InterfaceUser.prototype.getProfession = function () {
        console.log("this is user's profession: " + this.profession);
        return this.profession;
    };
    return InterfaceUser;
}());
;
var interfaceUser = new InterfaceUser('Vasya', 'Vasin', 33, 'Designer');
console.log('********* THIS IS INTERFACE FILE *********');
obj.getName();
interfaceUser.getFullName();
interfaceUser.getProfession();
//# sourceMappingURL=interface.js.map