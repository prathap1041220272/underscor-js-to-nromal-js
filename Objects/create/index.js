(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers ={one:1,two :2,three:3};
let number ={four:4};
a.innerText = JSON.stringify(numbers);

//underscore js
function Person(first, last) {
    this.firstk = first;
    this.lastk = last;
}

const no = _.create(numbers.prototype= function() {
	return this.firstk +" "+ this.lastk
},number);
c.innerText = JSON.stringify(no);

//normal js

  const m = Object.assign(numbers,number);
b.innerText = JSON.stringify(m);
}())