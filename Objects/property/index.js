(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let stooge = {name: 'moe'};
a.innerText = JSON.stringify(stooge);

//underscore js

const no = ('moe'=== _.property('name')(stooge));
c.innerText = JSON.stringify(no);

//normal js

 const n = (Object.values(stooge).indexOf('moe') != -1);
b.innerText = JSON.stringify(n);
}())