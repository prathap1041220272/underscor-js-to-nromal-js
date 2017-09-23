(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers = [1,2,3,1,0,1,0,4];
let k = [101, 2, 1, 10];
let n =[1,2];
a.innerText = JSON.stringify(numbers);

const no = _.union(numbers,k,n);
c.innerText = JSON.stringify(no);


const numb = [...new Set([...numbers,...k,...n])];
b.innerText = JSON.stringify(numb);
}())