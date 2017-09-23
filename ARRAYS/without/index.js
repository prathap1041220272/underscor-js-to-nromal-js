(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[1,2,3,1,0,1,0,4];
let n = [0,1];
a.innerText = JSON.stringify(numbers);

const no = _.without(numbers,0,1);
c.innerText = JSON.stringify(no);

function find(argument) {
	return n.indexOf(argument) <=-1
}
const numb = numbers.filter(find);
b.innerText = JSON.stringify(numb);
}())