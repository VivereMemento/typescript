interface IObj {
	name: string;
	getName(): string;
};

const obj: IObj = {
	name: 'obj',
	getName(): string {
		console.log( 'this is object with interface', this.name);
		return this.name;
	}
};

interface IUser {
	name: string;
	surname: string;
	age: number;
	profession?: string;
	getFullName(): string;
};

interface IGetProfession {
	getProfession(): string;
}

class InterfaceUser implements IUser, IGetProfession {
	constructor(
		public name: string,
		public surname: string,
		public age: number,
		public profession: string
	) {}

	getFullName(): string {
		console.log(`this is user's name: ${this.name} ${this.surname}`);
		return `${this.name} ${this.surname}`;
	};

	getProfession(): string {
		console.log(`this is user's profession: ${this.profession}`);
		return this.profession;
	}
};

const interfaceUser = new InterfaceUser('Vasya', 'Vasin', 33, 'Designer');

console.log('********* THIS IS INTERFACE FILE *********');
obj.getName();
interfaceUser.getFullName();
interfaceUser.getProfession();