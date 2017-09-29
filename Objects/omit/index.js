(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let names ={name: 'moe', age: 50, userid: 'moe1'};
a.innerText = JSON.stringify(names);

//underscore js

const no = _.omit(names,'userid');
c.innerText = JSON.stringify(no);

//normal js

  delete names.userid;
b.innerText = JSON.stringify(names);
}())