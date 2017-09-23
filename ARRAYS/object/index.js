(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let name =['moe', 'larry', 'curly'];
let numbers = [30, 40, 50];
var i =0;
txt = "";
let m = [name,numbers];
a.innerText = JSON.stringify(m);

const no = _.object(name,numbers);
c.innerText = JSON.stringify(no);



for(;name[i];){
	
txt += name[i]+" : "+numbers[i]+" , ";
	
		i++;
}
b.innerText = JSON.stringify(txt);
}())