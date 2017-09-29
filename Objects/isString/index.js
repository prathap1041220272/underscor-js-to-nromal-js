(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let stooge = "moe";
a.innerText = JSON.stringify(stooge);

//underscore js

const no =  _.isString(stooge);
c.innerText = JSON.stringify(no);

//normal js

 const n = (typeof(stooge)==='string');
b.innerText = JSON.stringify(n);
}())