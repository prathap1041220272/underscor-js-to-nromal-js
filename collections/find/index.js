(function() {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n-js");
	const c = document.querySelector("#_ujs");

	let numbers = [1,2,3,4,5];
	a.innerText = JSON.stringify(numbers);

	const no = _.find(numbers,function(num){return num % 3 == 0 ;});
	c.innerText = JSON.stringify(no);

	const numb = numbers.find(function(num){return num % 2 == 0 ;});
	b.innerText = JSON.stringify(numb);
}())