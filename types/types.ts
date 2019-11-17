// number
const num: number = 1;
const defaulNum = 2;
// string
const str: string = 'string';
const defaulStr = 'default string';
// boolean
const bool: boolean = true;
const defaulBool = false;
// any
let any: any = '1';
// orElse
let orElse: string | number = '1';
console.log('********* THIS IS TYPES FILE *********');
console.log('this is num', num);
console.log('this is default number', defaulNum);
console.log('this is str', str);
console.log('this is default string', defaulStr);
console.log('this is bool', bool);
console.log('this is default boolean', defaulBool);
console.log('this is any', any);
any = 1;
console.log('this is any after reassign', any);
console.log('this is orElse', orElse);
orElse = 1;
console.log('this is orElse after reassign', orElse);