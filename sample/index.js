(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[1,2,3,4,5,6];
a.innerText = JSON.stringify(numbers);

const no = _.sample(numbers);
c.innerText = JSON.stringify(no);

const numb = numbers.sort(function(){return 0.5 - Math.random()});
const n = numb.shift()
b.innerText = JSON.stringify(n);
}())