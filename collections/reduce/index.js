(function(){
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n-js");
	const c = document.querySelector("#_ujs");

	let numbers = [1,2,3,4,5];
	a.innerText = JSON.stringify(numbers);

	const no = _.reduce(numbers,function(memo,num){return memo  + num ;} ,0);
	c.innerText = JSON.stringify(no);

	const numb = numbers.reduce(function(total,number){return total  + number ;});
	b.innerText = JSON.stringify(numb);
}())