(function(){
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let numbers = [1,2,3,4,5];
	a.innerText = JSON.stringify(numbers);

	const no = _.min(numbers);
	c.innerText = JSON.stringify(no);

	const numb =  Math.min(...(numbers));
	b.innerText = JSON.stringify(numb);
}())