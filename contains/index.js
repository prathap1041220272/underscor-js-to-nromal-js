(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let number = [1,2,3,4];
	a.innerText = JSON.stringify(number);

	const no = _.contains(number,2);
	c.innerText = JSON.stringify(no);

	const numb = number.indexOf(2) === 1;
	b.innerText = JSON.stringify(numb);
}())