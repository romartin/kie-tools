import { SomeObject, someObjectType } from "./modules/j2cl-test1.js";

console.log(someObjectType);
let o1 = new SomeObject();
console.log(o1);

console.log(someObjectType.__proto__.constructor.name);
console.log(o1.__proto__.constructor.name);
