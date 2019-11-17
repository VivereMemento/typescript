var user1 = {
    name: 'user 1',
    age: 30,
    jobs: ['a', 'b'],
    logName: function () {
        console.log('this is', this.name);
    },
    getJobs: function () {
        return this.jobs;
    }
};
var user2 = {
    name: 'user 2',
    age: 30,
    jobs: ['a', 'b'],
    logName: function () {
        console.log('this is', this.name);
    }
};
console.log('********* THIS IS OBJECTS FILE *********');
user1.logName();
// console.log('this is jobs', user1.getJobs());
user2.logName();
//# sourceMappingURL=objects.js.map