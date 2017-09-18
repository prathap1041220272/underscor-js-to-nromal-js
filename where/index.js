(function() {
    const a = document.querySelector("#demo");
    const b = document.querySelector("#normaljs");
    const c = document.querySelector("#underscore");

    let listOfPlays = [{ author: "prathap", year : 1994 },
        { author: "prathap", year : 1995 },
        { author: "pspk", year : 1894 }
    ];


    const wher = _.where(listOfPlays, { author: "prathap", });
    c.innerText = JSON.stringify(wher);

        function f(aut) {
            return aut.author == "prathap";
        }
    
    const e = listOfPlays.filter(f);
    console.log(e)
    b.innerText = JSON.stringify(e);

}());