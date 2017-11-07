let myString: string;

myString = 'some other value';

// myString = 5;

const myNum = 456;

const myArr: stringOrNumber[] = ['1', '2', '3', 5, 'cat', 7];

myArr.push('1');
myArr.push(5);

const str = <string>myArr[0];

str.toUpperCase();

type stringOrNumber = string | number;

let strOrNum: stringOrNumber;

strOrNum = 5;

strOrNum = '5';

const o = {
  a: 'a',
  b: 'b'
};


// o.c = 'this doesn\' work';


interface IUser {
  name: string;
  sayHello(): string;
}

// const user: IUser = {
//   name: 'Jason'
// };


abstract class User implements IUser {
  // name: string;

  // private age: number;

  constructor(public name: string, private age: number) { }

  sayHello(): string {
    return `hello ${ this.name }`;
  }
}

class Person extends User {

  constructor(name: string, age: number, public eyes: string) {
    super(name, age);
  }

}

interface IPerson {
  eyes: string;
}


const person = new Person('Jason', 99, 'brown');

console.log(person.sayHello());

// user.age;

const arr: string[] = ['1', '2', '3', '5', 'cat', '7', 'dog'];

function map<T, TResult>(array: T[], callback: (element: T, index: number) => TResult) {
  const results: Array<TResult> = [];

  for (let index = 0; index < array.length; index++) {
    results.push(callback(array[index], index));
  }

  return results;
}

const result = map(arr, (element) => parseInt(element, 10));

console.log(result);
