(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let iceCream = {flavor: "chocolate"};
a.innerText = JSON.stringify(iceCream);

//underscore js

const no = _.clone(iceCream);
c.innerText = JSON.stringify(no);

//normal js

 const n = iceCream;
b.innerText = JSON.stringify(n);
}())