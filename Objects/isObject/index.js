(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let stooge = {};
a.innerText = JSON.stringify(stooge);

//underscore js

const no =  _.isObject(stooge);
c.innerText = JSON.stringify(no);

//normal js

 const n = (typeof(stooge)==='object');
b.innerText = JSON.stringify(n);
}())