const boom = document.getElementById("boom");

boom.addEventListener('click', () => {
    new Audio("./sounds/boom.wav").play();
})


const clap = document.getElementById("clap");

clap.addEventListener('click', () => {
    new Audio("./sounds/clap.wav").play();
})


const hihat = document.getElementById("hihat");

hihat.addEventListener('click', () => {
    new Audio("./sounds/hihat.wav").play();
})


const kick = document.getElementById("kick");

kick.addEventListener('click', () => {
    new Audio("./sounds/kick.wav").play();
})


const openhat = document.getElementById("openhat");

openhat.addEventListener('click', () => {
    new Audio("./sounds/openhat.wav").play();
})


const ride = document.getElementById("ride");

ride.addEventListener('click', () => {
    new Audio("./sounds/ride.wav").play();
})

const snare = document.getElementById("snare");

snare.addEventListener('click', () => {
    new Audio("./sounds/snare.wav").play();
})

const tink = document.getElementById("tink");

tink.addEventListener('click', () => {
    new Audio("./sounds/tink.wav").play();
})


const tom = document.getElementById("tom");

tom.addEventListener('click', () => {
    new Audio("./sounds/tom.wav").play();
})


// this keypress eevnt is triggered on the whole document and will use the keycode from evemt

document.addEventListener('keypress', (event) =>{
    if(event.keyCode == 113){
        new Audio("./sounds/boom.wav").play();
    
} 
else if(event.keyCode ==119){
    new Audio("./sounds/clap.wav").play();
}

else if(event.keyCode == 101){
    new Audio("./sounds/hihat.wav").play();
}

else if(event.keyCode == 114){
    new Audio("./sounds/kick.wav").play();
}
else if(event.keyCode == 116 ){
    new Audio("./sounds/openhat.wav").play();
}

else if(event.keyCode == 97 ){
    new Audio("./sounds/ride.wav").play();
}

else if(event.keyCode == 115 ){
    new Audio("./sounds/snare.wav").play();
}

else if(event.keyCode ==100 ){
    new Audio("./sounds/tink.wav").play();
}

else if(event.keyCode == 102){
    new Audio("./sounds/tom.wav").play();
}

})

