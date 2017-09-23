(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");


let numbers = [ 30,40,50];
a.innerText = JSON.stringify(numbers);

const no = _.sortedIndex(numbers,40);
c.innerText = JSON.stringify(no);

const txt = numbers.sort();
const n = txt.indexOf(40);
b.innerText = JSON.stringify(n);
}())