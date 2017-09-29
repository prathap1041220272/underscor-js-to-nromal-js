(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let stooge = new Date();
a.innerText = JSON.stringify(stooge);

//underscore js

const no =  _.isDate(stooge);
c.innerText = JSON.stringify(no);

//normal js

 const n = (typeof(stooge)==='object');
b.innerText = JSON.stringify(n);
}())