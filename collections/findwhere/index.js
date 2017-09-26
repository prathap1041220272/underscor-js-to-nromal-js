(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#normaljs");
	const c = document.querySelector("#underscore");

	let person = [{ name: "prathap", age: 24 },
            { name: "pspk", age: 24 },
            { name: "srk", age: 56 }
        ];
        a.innerText = JSON.stringify(person);

        const found = _.findWhere(person,{name : "prathap"});
        c.innerText = JSON.stringify(found);

        function f(aut) {
            return aut.name == "prathap";
        }
    
    const e = person.filter(f);
    console.log(e)
    b.innerText = JSON.stringify(e);
}())