(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let details = [{name: 'moe', age: 40}, {name: 'larry', age: 60}, {name: 'curly', age: 50}];
	a.innerText = JSON.stringify(details);

	const no = _.max(details,function(person){return person.age ;});
	c.innerText = JSON.stringify(no);

const numb = details.sort(function(a,b){return a.age-b.age})
const n = numb.pop();
	b.innerText = JSON.stringify(n);

}());