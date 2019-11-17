enum Jobs {
	Frontend,
	Backend,
	Designer
};

const backend: Jobs = Jobs.Backend;

const throwNewError = (err: string): never => {
	throw new Error(err);
};
console.log('********* THIS IS SPEC-TYPES FILE *********');
console.log('this is enum', backend);
throwNewError('this is throwNewError function with never');