(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let stooge = {name: 'moe'};
a.innerText = JSON.stringify(stooge);

//underscore js

const no =  _.propertyOf(stooge)('name');
c.innerText = JSON.stringify(no);

//normal js
 function key(name){
        return name = 'moe';
     }
 const n = (Object.values(stooge).find(key));
b.innerText = JSON.stringify(n);
}())