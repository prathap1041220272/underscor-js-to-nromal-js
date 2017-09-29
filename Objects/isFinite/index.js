(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let stooge = 25;
a.innerText = JSON.stringify(stooge);

//underscore js

const no =  _.isFinite(stooge);
c.innerText = JSON.stringify(no);

//normal js

 const n = (typeof(stooge)==='number');
b.innerText = JSON.stringify(n);
}())