//
//? 1.Number
//? 2.Boolean
//? 3.String

//? 4.Tuple
//? 5.Array
//? 6.Enum
//? 7.Object

//? 8.Void
//? 9.Any
//? 10.Null
//? 11.Undefined

var num1: number = 4;
var married: boolean = false;
var fullnameString: string = "Marry Doe";
// var img_url: null | string = "https://dasdsad.com/dasdsa.png";
var img_url: null = null;
var description: undefined = undefined;

var data: any = 5; //! Any
// var numbers: number[] = [1, 2, 3, 4, 5];//! Array number
var fruits: string[] = ["dsas", "dasda", "das"]; //! Array string
var booleanArray: boolean[] = [true, false]; //! Array boolean

var personinfo: [number, string, "salam", number] = [1, "say", "salam", 32]; //! Tuple

function A(p: number, p2: boolean, p3: string): boolean {
  return true;
}

function B(p: number, p2: boolean, p3: string): void {
  console.log(p);
  console.log(p3);
}

//-------

type MyObjType = {
  name: string;
  age: number;
  job?: string;
  sayHello: (text: number) => void;
};

var myObj: MyObjType = {
  name: "fullname",
  age: 43,
  //   job: "Devel0per",

  sayHello: function (text) {
    console.log(this.name + text);
  },
};

myObj.sayHello(2);

//----

enum METHODS {
  GET = "GET",
  POST = "POST",
}

console.log(METHODS.GET);

//---------

type UserID = number | string;

type Child = {
  name: string;
  id: number | string;
  age?: number;
};

type UserType = {
  name: string;
  access: boolean;
  slide: 0 | 1;
  id: UserID;
  children: Child | Child[];
};

const user: UserType = {
  name: "John",
  access: false,
  slide: 1,
  id: 232312,
  children: [{ name: "Sofia", age: 1, id: 21 }],
};
