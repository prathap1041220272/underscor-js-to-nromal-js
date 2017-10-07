(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let details = [{name: 'moe', age: 40}, {name: 'larry', age: 60}, {name: 'curly', age: 50}];
	a.innerText = JSON.stringify(details);

	const names = _.indexBy(details,'age')
	c.innerText = JSON.stringify(names);

const n = [  ];
for ( i = 0; i < details.length; i++) {
	let person = details[i].age+":" + details[i];
	n.push(person)
}

	b.innerText = JSON.stringify(n);
}())