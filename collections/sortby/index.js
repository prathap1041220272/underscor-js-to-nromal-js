(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let numbers = [1, 2, 3, 4, 5, 6];
	let details = [{name: 'moe', age: 40}, {name: 'larry', age: 60}, {name: 'curly', age: 50}];
	a.innerText = JSON.stringify(details);

	const no = _.sortBy(numbers,function(num){ return Math.sin(num);});
	const names = _.sortBy(details,'name')
	c.innerText = JSON.stringify(no,names);


	const results = details.sort(function(a,b){return b.age-a.age});
	const result = numbers.sort(function(a,b){return Math.cos(b-a)});
	b.innerText = JSON.stringify(result);
}())