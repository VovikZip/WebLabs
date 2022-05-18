let regName = /[А-Я-ІЄ][а-я-іє]{1,20}\s[А-Я-ІЄ]\.[А-Я-ІЄ]\./,
    regGroup = /[А-Я-ІЄ]{2}\-[1-9]{2}/,
    regFaculty = /[А-Я-ІЄ]{4}/,
    regNum = /\([0-9]{3}\)\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}/,
    regAdress = /[м]\.\s[А-Я-ІЄ][а-я-іє]{1,20}/,
    redMail = /[a-z]{20}\@[a-z]{7}\.[com]{3}/,
    regCard = /[А-Я-ІЄ]{2}\s\№[1-9]{6}/;


let inpName = document.querySelector("#name");
let inpGroup = document.querySelector("#group");
let inpFaculty = document.querySelector("#faculty");
let inpNum = document.querySelector("#num");
let inpCard = document.querySelector("#card");

document.querySelector(".submit").onclick = function(e){
    e.preventDefault();
    if (regName.test(inpName.value) && regGroup.test(inpGroup.value) && 
        regFaculty.test(inpFaculty.value) && regCard.test(inpCard.value) && 
        regNum.test(inpNum.value) ) {
        console.log("corect");
        submit();
    }else {
        console.log("error");
    }

};

function submit(){
    alert(`Ім'я: ${inpName.value}
Група: ${inpGroup.value}
Факультет: ${inpFaculty.value}
Номер телефону: ${inpNum.value}
ID-карта: ${inpCard.value}
`)
}

const titl = document.getElementById('c1');

titl.onmouseover = function() {
    let randomColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    let randColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    titl.style.backgroundColor = randColor;
    titl.style.color = randomColor;
}

const cell2 = document.getElementById('c9');

const three = document.getElementById('c3');
const fifteen = document.getElementById('c15');
const twentyOne = document.getElementById('c21');
const twentySeven = document.getElementById('c27');
const thirtyThree = document.getElementById('c33');

three.ondblclick = function() {
    three.style.background = color.value;
    cell2.style.background = color.value;
    fifteen.style.background = color.value;
    twentyOne.style.background = color.value;
    twentySeven.style.background = color.value;
    thirtyThree.style.background = color.value;
}
function setColor() {
    const color = document.getElementById("color");
}

three.onclick = function() {
    three.style.background = color.value;
}

console.log({valueOf:()=>5}+1===6);
console.log()