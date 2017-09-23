(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[6,5,4,3,2];
a.innerText = JSON.stringify(numbers);

const no = _.last(numbers);
c.innerText = JSON.stringify(no);

const numb = numbers.pop();
b.innerText = JSON.stringify(numb);
}())