(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");


let numbers = [2,4,7,8];
a.innerText = JSON.stringify(numbers,function());

const no = _.findIndex(numbers, 7);
c.innerText = JSON.stringify(no);


// const n = numbers.indexOf(7);
// b.innerText = JSON.stringify(n);
}())