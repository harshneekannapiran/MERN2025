var a=10;
a=20;
console.log(a);
let b=10;
b=20;
console.log(b);
const t=5;
console.log(t);

//let const unblocked 
//var reusable

//spread operator
var arr=[1, 2, 3];
var arr2=[...arr, 4, 5];
console.log(arr2);
console.log(arr);

//destructuring
var marks=[99,98,97,94,90];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1,m2,m3,m4,m5);


//callback function
function demo(){
    console.log("Hello World from demo");
}

var callback = (func)=>{
    console.log("Callback function called");
    func();
    //can also demo();
}
callback(demo);

//map
var numbers = [1, 2, 3, 4, 5];
var squares = numbers.map((num) => num * num);
console.log(squares);

//filter
var odd = numbers.filter((num) => num % 2 !== 0);
console.log(odd);

//reduce
var sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

//sqr and add values greater than 5
var arr = [1, 2, 3, 4, 5, 6];

var result = arr
  .map(num => num * 2)         
  .filter(num => num > 5)     
  .reduce((acc, num) => acc + num, 0); 
console.log(result);  