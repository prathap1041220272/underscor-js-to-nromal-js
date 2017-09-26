(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[0,1,2,3,4,5,6];
a.innerText = JSON.stringify(numbers);

const no = _.partition(numbers,function (num) { return num % 2==1});
c.innerText = JSON.stringify(no);

const numb = numbers.filter(function (num) { return num % 2==0});
const n = numbers.filter(function (num) { return num % 2==1});
const k = n+","+numb;
b.innerText = JSON.stringify([k]);
}())