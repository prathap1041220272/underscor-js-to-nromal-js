(function(){
	const a = document.querySelector("#demo");
	const b = document.querySelector("#normaljs");
	const c = document.querySelector("#underscore");

	let numbers = [1,2,3,4,5];
	a.innerText = JSON.stringify(numbers);

	const no = _.filter(numbers,function(num){ return num % 2 == 0;});
	c.innerText = JSON.stringify(no);

	const numb = numbers.filter(function(num){ return num % 2 == 0 ;});
	b.innerText = JSON.stringify(numb);
}())