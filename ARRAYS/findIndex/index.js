(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");


let numbers = [2,4,7,8];
a.innerText = JSON.stringify(numbers);

const no = _.findIndex(numbers, num);
c.innerText = JSON.stringify(no);

function num(value) {
	return value === 7
}
const n = numbers.findIndex(num);
b.innerText = JSON.stringify(n);
}())