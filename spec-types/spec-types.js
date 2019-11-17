var Jobs;
(function (Jobs) {
    Jobs[Jobs["Frontend"] = 0] = "Frontend";
    Jobs[Jobs["Backend"] = 1] = "Backend";
    Jobs[Jobs["Designer"] = 2] = "Designer";
})(Jobs || (Jobs = {}));
;
var backend = Jobs.Backend;
var throwNewError = function (err) {
    throw new Error(err);
};
console.log('********* THIS IS SPEC-TYPES FILE *********');
console.log('this is enum', backend);
throwNewError('this is throwNewError function with never');
//# sourceMappingURL=spec-types.js.map