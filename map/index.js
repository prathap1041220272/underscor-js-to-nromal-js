(function(){
	const a = document.querySelector('#demo');
	const b = document.querySelector('#n-js');
	const c = document.querySelector('#_ujs');

	let numbers = [1,2,3,4,5];
	a.innerText = JSON.stringify(numbers);

	const no = _.map(numbers,function(num){return num *4; });
	c.innerText = JSON.stringify(no);

	const numb = numbers.map(function(num){return num * 4;});
	b.innerText = JSON.stringify(numb);

}());