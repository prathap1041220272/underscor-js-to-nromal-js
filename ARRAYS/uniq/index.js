(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers = [1,2,3,1,0,1,0,4];
a.innerText = JSON.stringify(numbers);

const no = _.union(numbers);
c.innerText = JSON.stringify(no);


const numb = [...new Set([...numbers])];
b.innerText = JSON.stringify(numb);
}())