(function(){
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n-js");
	const c = document.querySelector("#_ujs");

	let numbers = [[1,2,3] , [4,5] , [6,7]];
	a.innerText = JSON.stringify(numbers);

	const no = _.reduce(numbers,function(a , b) {return b.concat(a) ; }, []);
	c.innerText = JSON.stringify(no);

	const numb = numbers.reduce(function(c,d){return d.concat(c) ;});
	b.innerText = JSON.stringify(numb);
}()) 