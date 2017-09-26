(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let number = [1,2,3,4,5];
	a.innerText = JSON.stringify(number);

	const no = _.every(number,function(num){ return num % 2 == 0 ;});
	c.innerText = JSON.stringify(no);

	const numb = number.every(function(num){ return num % 2 == 0 ;});
	b.innerText = JSON.stringify(numb);
}())