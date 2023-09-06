"use strict";
//
//? 1.Number
//? 2.Boolean
//? 3.String
//? 4.Tuple
//? 5.Array
//? 6.Enum-
//? 7.Object-
//? 8.Void-
//? 9.Any
//? 10.Null
//? 11.Undefined
var num1 = 4;
var married = false;
var fullnameString = "Marry Doe";
// var img_url: null | string = "https://dasdsad.com/dasdsa.png";
var img_url = null;
var description = undefined;
var data = 5; //! Any
// var numbers: number[] = [1, 2, 3, 4, 5];//! Array number
var fruits = ["dsas", "dasda", "das"]; //! Array string
var booleanArray = [true, false]; //! Array boolean
var personinfo = [1, "say", "salam", 32]; //! Tuple
function A(p, p2, p3) {
    return true;
}
function B(p, p2, p3) {
    console.log(p);
    console.log(p3);
}
var myObj = {
    name: "fullname",
    age: 43,
    //   job: "Devel0per",
    sayHello: function (text) {
        console.log(this.name + text);
    },
};
myObj.sayHello(2);
//----
var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
})(METHODS || (METHODS = {}));
//---------
