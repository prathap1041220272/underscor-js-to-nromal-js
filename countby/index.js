(function () {
	const a = document.querySelector("#demo");
	const b = document.querySelector("#n");
	const c = document.querySelector("#u");

	let details = [1,2,3,4,5,6];
	a.innerText = JSON.stringify(details);

	const names = _.countBy(details,function(num){return  num % 2== 0 ? 'odd':'even'})
	c.innerText = JSON.stringify(names);


	var n = { even: [], odd: [] };

    details.forEach(function(val) {
        var key = (val % 2 === 0) ? 'even' : 'odd';
        n[key].push(val);
    });

    var k = { even: n.even.length, odd: n.odd.length };

	b.innerText = JSON.stringify(k);
}()) 