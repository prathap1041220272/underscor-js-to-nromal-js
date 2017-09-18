(function(){
	const a = document.querySelector('#demo');
	const b = document.querySelector('#normaljs');
	const c = document.querySelector('#underscore');

	let numbers = [1,2,3,4,5,6];
	a.innerText = JSON.stringify(numbers);

	const no = _.each(numbers,alert);
	

const num = numbers.forEach(alert);



}())