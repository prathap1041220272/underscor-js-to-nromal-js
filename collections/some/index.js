(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let number = [1, 2, 3, 4, 5, 6];
	a.innerText =JSON.stringify(number);


	const num= _.some(number);
	c.innerText = JSON.stringify(num);

	const no = number.every(function(num){
		
		return num >= 1;
	});
	b.innerText= JSON.stringify(no);
}())