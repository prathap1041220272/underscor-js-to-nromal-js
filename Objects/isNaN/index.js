(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let stooge = "n";
a.innerText = JSON.stringify(stooge);

//underscore js

const no =  _.isNaN(NaN);
c.innerText = JSON.stringify(no);

//normal js

 const n = isNaN(NaN);
b.innerText = JSON.stringify(n);
}())