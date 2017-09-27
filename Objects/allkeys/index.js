(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers ={one: 1, two: 2, three: 3};
a.innerText = JSON.stringify(numbers);


//underscore js

function Stooge(name) {
  this.name = name;
}
Stooge.prototype.silly = true;
const no = _.allKeys(new Stooge("moe"));
c.innerText = JSON.stringify(no);



//normal js


b.innerText = JSON.stringify(numb);
}())