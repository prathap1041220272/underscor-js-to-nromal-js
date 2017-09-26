(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");



let name =[["moe","larry","curly"],[30,40,50],[true,false,false]];
a.innerText = JSON.stringify(name);



const no = _.unzip(name);
c.innerText = JSON.stringify(no);


const keys = [];
const age = [];
const boolean = [];
const result =name.join();
const s = result.split(",");
for (var i = 0; i < s.length; i++) {
	if ((i+3)%3 ===0) {
		keys.push(s[i]);
	}
	else if ((i+2)%2 ===0){
		age.push(s[i]);
	}
	else{
		boolean.push(s[i]);
	}
}
const r = [keys,age,boolean];
b.innerText = JSON.stringify(r);
}())