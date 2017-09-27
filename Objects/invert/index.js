(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let names = {Moe: "Moses", Larry: "Louis", Curly: "Jerome"};
a.innerText = JSON.stringify(names);

//underscore js
const no = _.invert(names);
c.innerText = JSON.stringify(no);

//normal js

const key = Object.keys(names);
const keys = key.sort();
    const value = Object.values(names);
    const values = value.sort();
    const s = [ ];
    for (var i = 0; i < keys.length; i++) {
    	s.push(values[i],keys[i]); 
    }
b.innerText = JSON.stringify(s);
}());