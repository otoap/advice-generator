"use strict"

let h1 = document.getElementsByTagName("h1")[0];
let p = document.getElementsByTagName("p")[0];
let button = document.getElementsByTagName("button")[0];

async function advice() {
    try {
        let advc = await fetch("https://api.adviceslip.com/advice");
        if(!advc.ok) {
            throw new Error ("error boyyy")
        }
        let newAdvc = await advc.json()
        h1.innerHTML = "advice #" + newAdvc.slip.id;
        p.innerHTML = newAdvc.slip.advice;
    } catch (error) {
        console.error(error)
    }
}

advice();

button.addEventListener("click", (event)=> {
    event.preventDefault();
    advice();
})

