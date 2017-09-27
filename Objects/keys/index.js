(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers ={one: 1, two: 2, three: 3};
a.innerText = JSON.stringify(numbers);

const no = _.keys({one: 1, two: 2, three: 3});
c.innerText = JSON.stringify(no);


const numb = Object.keys(numbers)
b.innerText = JSON.stringify(numb);
}())