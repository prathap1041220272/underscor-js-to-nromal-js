(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let iceCream = {flavor: "chocolate"};
let added = {flavor: "vanilla", sprinkles: "lots"};
a.innerText = JSON.stringify(iceCream);

//underscore js

const no = _.defaults(iceCream,added);
c.innerText = JSON.stringify(no);

//normal js

  added.flavor = "chocolate";
b.innerText = JSON.stringify(iceCream);
}())