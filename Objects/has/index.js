(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let iceCream = {a: 1, b: 2, c: 3};
a.innerText = JSON.stringify(iceCream);

//underscore js

const no = _.has(iceCream,'b');
c.innerText = JSON.stringify(no);

//normal js

 const n = (Object.keys(iceCream).indexOf('b') != -1);
b.innerText = JSON.stringify(n);
}())