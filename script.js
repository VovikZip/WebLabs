const first = document.getElementById("first");
const second = document.querySelector("#second");

first.onclick = firstClick;
second.onclick = secondClick;

function firstClick (){
    let randomColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    let randColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    first.style.background = randomColor;
    first.style.color = randColor;
}

function secondClick (){
    let randomColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    let randColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    second.style.background = randomColor;
    second.style.color = randColor;
}




const image = document.querySelector('#lviv');
document.querySelector('.add').addEventListener('click', () => add());
document.querySelector('.delete').addEventListener('click', () => remove());
document.querySelector('.increase').addEventListener('click', () => increase());
document.querySelector('.decrease').addEventListener('click', () => decrease());

function increase() {
    if(image.classList.contains('small-size')) {
        image.classList.remove('small-size');
        image.classList.add('default');
    }
    else if(image.classList.contains('default')) {
        image.classList.remove('default');
        image.classList.add('big-size');
    }
    else {
        alert("You cannot increase the image anymore!");
        return
    }
}

function decrease() {
    if(image.classList.contains('big-size')) {
        image.classList.remove('big-size');
        image.classList.add('default');
    }
    else if(image.classList.contains('default')) {
        image.classList.remove('default');
        image.classList.add('small-size');
    }
    else {
        alert("You cannot decrease the image anymore!");
        return
    }
}

function remove() {
    if(image.classList.contains('visible')) {
        image.classList.remove('visible');
        image.classList.add('remove');
    }
}

function add() {
    if(image.classList.contains('remove')) {
        image.classList.remove('remove');
        image.classList.add('visible');
    }
}