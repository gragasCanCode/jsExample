const body=  document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(IMG_NUMBER){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom(IMG_NUMBER);
    paintImage(randomNumber);
}

init();