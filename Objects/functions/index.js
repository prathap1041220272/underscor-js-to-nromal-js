(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[];
a.innerText = JSON.stringify(numbers);

//underscore js

const no = _.functions(_);
c.innerText = JSON.stringify(no);

//normal js

  const m = numbers.sort(functions(_));
b.innerText = JSON.stringify(m);
}())