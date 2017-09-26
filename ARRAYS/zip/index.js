(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let name =['moe', 'larry', 'curly'];
let numbers = [30, 40, 50];
let boolean = [true, false, false];
var i =0;
txt = "";
let m = [name,numbers,boolean];
a.innerText = JSON.stringify(m);

const no = _.zip(name,numbers,boolean);
c.innerText = JSON.stringify(no);



function zip(name, i) {
        return [name, numbers[i],boolean[i]];
    }

    const n = name.map(zip);

b.innerText = JSON.stringify(n);
}())