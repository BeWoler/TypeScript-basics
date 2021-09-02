// Boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

// Number
const int: number = 2;
const float: number = 4.2;
const num: number = 3e10;

// String
const str: string = 'string';

// Array
const arr: number[] = [1,2,3,4,5,6];
const arr2: Array<number> = [1,2,3,4,5,6]; //generic запись
const arr3: string[] = ['hello', 'bye'];
const arr4: Array<string> = ['hello', 'bye']; //generic запись

// Tuple
const contact: [string, number] = ['Misha', 42424];

// Any
let variable: any = 42;
//...
variable = 'new String';
variable = [];

// ====
function sayName(name: string): void {
  console.log(name);
}
sayName('Misha');

// Never
function throwError(message: string): never {
  throw new Error(message);
}

function inf(): never {
  while(true) {

  }
}

// Type
type Login = string;

let login: Login = 'admin';

type ID = string | number;
const id: ID = 1234;
const id2: ID = '21412';
// const id3: ID = true --> error


// null & undefined
type SomeType = string | null | undefined;
