// import {cars as muthu, x} from "./react.js";
// import {x} from "./react"


// import bike from "./react.js";

// console.log(muthu,x);
// console.log(bike);


// function sum(a,b) {
//     this.addition = a+b;
//     this.subtraction = a-b;
//     this.multiplication=a*b;
//     this.division = a/b
// }
// const calculation = new sum(4,5);
// console.log(calculation.addition);

var change = document.getElementById("change");
var num = document.getElementById("number");
var btn = document.getElementById("btn");

var arr = [0,"I","II","III","IV","V","VI","VII","VIII","IX","X"];

btn.addEventListener("click" ,changes);

function changes() {
    let num1 = num.value;
    
   var num2=arr[num1];

   return change.innerText = num2;
}







