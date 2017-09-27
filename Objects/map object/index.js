(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers ={start: 5, end: 12};
a.innerText = JSON.stringify(numbers);

//underscore js
const no = _.mapObject(numbers, function(val, key) {
  return val + 5;
});
c.innerText = JSON.stringify(no);

//normal js
const keys = Object.keys(numbers);
    const values = Object.values(numbers);
    const result = { };
    for (let i=0; i<= keys.length-1; i++) {
        result [keys[i]] = values[i] + 5;
    }
b.innerText = JSON.stringify(result);
}())