export let someObjectType = {
  someName: "SomeObjectType1",
  someAge: 1,
};

export class SomeObject {
  someName;
  someAge;
  someOtherValue;

  constructor() {
    this.someName = "SomeObject1";
    this.someAge = 2;
    this.someOtherValue = 999;
  }
}
