(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");


let numbers = [];
a.innerText = JSON.stringify(numbers);

const no = _.range(10);
c.innerText = JSON.stringify(no);

for (var i = 0; i < 10; i++) {
	 numbers += i +" , ";
}
const numb = [numbers];
b.innerText = JSON.stringify(numb);
}())