(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[1,2,3,0,4];
let n = [0,10,4];
a.innerText = JSON.stringify(numbers);

const no = _.difference(numbers,n);
c.innerText = JSON.stringify(no);

function find(argument) {
	return n.indexOf(argument) <=-1
}
const numb = numbers.filter(find);
b.innerText = JSON.stringify(numb);
}())