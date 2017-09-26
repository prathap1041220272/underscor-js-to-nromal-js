(function() {
	const a= document.querySelector("#demo");
	const b= document.querySelector("#n");
	const c= document.querySelector("#u");

let numbers =[0,1,2,3,"",false,6];
a.innerText = JSON.stringify(numbers);

const no = _.compact(numbers);
c.innerText = JSON.stringify(no);


      function filterer(arr) {
     return arr > 0|| isNaN(arr) === true;
  }
    const numb = numbers.filter(filterer)
b.innerText = JSON.stringify(numb);
}())