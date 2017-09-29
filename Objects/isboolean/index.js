(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let stooge = true;
a.innerText = JSON.stringify(stooge);

//underscore js

const no =  _.isBoolean(stooge);
c.innerText = JSON.stringify(no);

//normal js

 const n = (typeof(stooge)==='boolean');
b.innerText = JSON.stringify(n);
}())