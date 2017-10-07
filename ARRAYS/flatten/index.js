(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[[6],[5],[4],[3],[2,1]];
a.innerText = JSON.stringify(numbers);

const no = _.flatten(numbers);
c.innerText = JSON.stringify(no);


const num =numbers.reduce(function(a,b){
	return b.concat(a);

});
const num1 =[].concat(...num);
b.innerText = JSON.stringify(num);
}())