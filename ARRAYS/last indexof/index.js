(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");


let numbers = [30, 40, 50];
a.innerText = JSON.stringify(numbers);

const no = _.lastIndexOf(numbers,50);
c.innerText = JSON.stringify(no);

const txt = numbers.lastIndexOf(50);
b.innerText = JSON.stringify(txt);
}())