(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[1,2,3,];
let n = [101, 2, 1, 10];
let k =  [2,1];
a.innerText = JSON.stringify(numbers);

const no = _.intersection(numbers,n ,k);
c.innerText = JSON.stringify(no);

var s = n+k;
function find(argument) {
	return n.indexOf(argument) >=1;
}
const numb = numbers.filter(find);
b.innerText = JSON.stringify(numb);
}())