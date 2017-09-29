(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let stooge = [];
a.innerText = JSON.stringify(stooge);

//underscore js

const no =  _.isEmpty(stooge);
c.innerText = JSON.stringify(no);

//normal js

 const n = (stooge.indexOf(0)<=1);
b.innerText = JSON.stringify(n);
}())