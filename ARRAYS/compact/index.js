(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[6,5,false, "",4,3,2,1];
a.innerText = JSON.stringify(numbers);

const no = _.compact(numbers);
c.innerText = JSON.stringify(no);

function find(num){return num*1 ==0 ;}
const numb = numbers.filter(pop());

b.innerText = JSON.stringify(numb);
}())