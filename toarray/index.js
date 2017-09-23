(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[1,2,3,4,5,6];
a.innerText = JSON.stringify(numbers);

const no = function () {return _.toArray(numbers).slice(2)}(numbers);
c.innerText = JSON.stringify(no);

const numb = numbers.slice(2);
b.innerText = JSON.stringify(numb);
}())