(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers ={one:1,two :2,three:3};
let number ={four:4};
a.innerText = JSON.stringify(numbers);

//underscore js

const no = _.extend(numbers,number);
c.innerText = JSON.stringify(no);

//normal js

  const m = Object.assign(numbers,number);
b.innerText = JSON.stringify(m);
}())