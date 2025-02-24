import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();
warmup2();

function warmup1() {
    console.log("Exercise week 1");
    document.querySelector("#button-1a").addEventListener("click", function() {
    console.log("click OK");

    const name = '<p>Hallo, dit is de oefening van Nolan</p>';
    document.querySelector('#content-1').innerHTML = name;
    
    });

    document.querySelector("#button-1b").addEventListener("click", function() {
    console.log("click OK 2");
    
    const section1 = document.querySelector('#section-1');
    section1.style.background = "lightblue";

    });

    document.querySelector("#button-1c").addEventListener("click", function() {
        console.log("click OK 3");
        
    const newTitle = document.createElement('h1');
    newTitle.innerHTML = '<h1>Ik ben er klaar voor</h1>'
    newTitle.style.fontSize = "15px";
    document.querySelector('#content-1').append(newTitle);
        

    });

}

function warmup2() {
    console.log("Exercise week 2");
    document.querySelector("#button-2a").addEventListener("click", function() {
    console.log("click OK");
    const scores = getRandomScores(10);
    document.createElement("li");
    li.textcontent = scores;
    ul.appendChild(li);
    document.querySelector('#content-2').innerHTML = scores;

    });
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}