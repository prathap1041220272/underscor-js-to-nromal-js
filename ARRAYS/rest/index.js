(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[6,5,4,3,2,1];
a.innerText = JSON.stringify(numbers);

const no = _.rest(numbers);
c.innerText = JSON.stringify(no);

const numb = numbers.shift();
const n =numbers;
b.innerText = JSON.stringify(n);
}())