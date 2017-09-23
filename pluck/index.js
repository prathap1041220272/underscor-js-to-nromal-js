(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let person =  [{name: 'prathap', age: 24}, {name: 'n', age: 50}, {name: 'c', age: 60}];;
	a.innerText = JSON.stringify(person);

	const no = _.pluck(person,'name');
	c.innerText = JSON.stringify(no);

	const numb = [ ];
	for (i=0; i<person.length; i++) {
		let personName = person[i].name;
		numb.push(personName)
	}
	b.innerText = JSON.stringify(numb);
}())