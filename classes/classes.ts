class SuperUser {
	private age: number = 44;
	protected isTeacher: boolean = true;

	constructor(
		public name: string,
		public job: string
	) {}

	getAge(): number {
		console.log(`this is user's age ${this.age}`);
		return this.age;
	}

	getIsTeacher(): boolean {
		console.log(`is object a teacher - ${this.isTeacher}`);
		return this.isTeacher;
	}
};

class Anonim extends SuperUser {
	constructor(job: string) {
		super('anonim', job);
		this.isTeacher = false;
	}
};

const user = new SuperUser('WTF', 'Frontend');
const anonim = new Anonim('unemployed');

// abstract class
abstract class Car {

	private year: number = 2010;

	constructor(
		public model: string,
	){}

	abstract logInfo(info: string): void;

	getCarYear(val): number {
		console.log(`this is ${val} year ${this.year}`);
		return this.year;
	}
};

class Mercedes extends Car {
	logInfo(info: string) {
		console.log('this is info: ', info);
	};
};

const car = new Mercedes('sss');

console.log('********* THIS IS CLASSES FILE *********');
console.log(`this is user's name ${user.name}`);
console.log(`this is user's job ${user.job}`);
user.getAge();
user.getIsTeacher();
console.log(`this is anonim's name ${anonim.name}`);
anonim.getIsTeacher();
car.logInfo('this Mercedes');
car.getCarYear('mercedes');
console.log('this is model of car', car.model);