(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers ={one:1,two :2,three:3};
a.innerText = JSON.stringify(numbers);

//underscore js
const no = _.pairs(numbers);
c.innerText = JSON.stringify(no);

//normal js
const keys = Object.keys(numbers);
    const values = Object.values(numbers);
    const s= [];
    for (var i = 0; i < keys.length; i++) {
    	s.push([keys[i],values[i]]); 
    }
b.innerText = JSON.stringify(s);
}())