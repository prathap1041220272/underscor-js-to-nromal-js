(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let number = [[1,3,2],[1,5,2,7]];
	a.innerText = JSON.stringify(number);

	const no = _.invoke(number,'sort');
	c.innerText = JSON.stringify(no);

	const numb = number.sort();
	b.innerText = JSON.stringify(numb);
}())