import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();
warmup2();
warmup3();
warmup4();
warmup5();

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
    document.querySelector("#button-3a").addEventListener("click", function() {
    console.log("click OK");
    const object = JSON.parse(student);
    console.log(object);

    document.querySelector("#button-3b").innerHTML =  `<h2>$(object.name)</h2>`;

    });

}

function warmup4() {
    let main, min, max;

    document.querySelector("#button-4a").addEventListener("click", function() {
    console.log('start fetch...');
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric")
        .then(function(response) {
            console.log('start receiving response...')
                    return response.json();

        })

        .then(function (data) {
            console.log(data);
            
        })

    });

    document.querySelector("#button-4b").addEventListener("click", function() {
        document.querySelector("#content-4").innerHTML = 
        `<div>
        <h2>Sattelite:</h2>
        <h4></h4>
        <h4></h4>
        </div>`

    })

}

import Student from './students.js';

function warmup5() {
const Nolan = new Student("Nolan", 20, 8);

document.querySelector("#button-5a").addEventListener("click", function() {
    console.log(Nolan);
    
    });

    document.querySelector("#button-5b").addEventListener("click", function() {
        console.log("click OK");
    
        document.querySelector('#content-5').innerHTML = `<div>
        <h2>Name: ${Nolan.name}</h2>
        <h2>Score: ${Nolan.score}</h2>
        </div>`
        
        });

}

