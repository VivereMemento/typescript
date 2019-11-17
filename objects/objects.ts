
type User = {
	name: string,
	age: number,
	jobs: string[],
	logName: () => void,
	getJobs?: () => string[]
};

const user1: User = {
	name: 'user 1',
	age: 30,
	jobs: ['a', 'b'],
	logName(): void {
		console.log('this is', this.name);
	},
	getJobs(): string[] {
		return this.jobs;
	}
};

const user2: User = {
	name: 'user 2',
	age: 30,
	jobs: ['a', 'b'],
	logName(): void {
		console.log('this is', this.name);
	}
};

console.log('********* THIS IS OBJECTS FILE *********');
user1.logName();
// console.log('this is jobs', user1.getJobs());
user2.logName();