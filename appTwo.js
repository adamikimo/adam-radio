var volumeRange = document.querySelector('.volume-range');
var speedRange = document.querySelector('.speed-range');
var audio = document.querySelector('.audio');
var linearGrdiantOne = document.querySelector('.linearGrdiantOne');
var linearGrdiantTwo = document.querySelector('.linearGrdiantTwo');
var linearGrdiantThree = document.querySelector('.linearGrdiantThree');
var linearGrdiantFour = document.querySelector('.linearGrdiantFour');

linearGrdiantOne.addEventListener("click" , ()=>{
    createColor("color1");
});
linearGrdiantTwo.addEventListener("click" , ()=>{
    createColor("color2");
});
linearGrdiantThree.addEventListener("click" , ()=>{
    createColor("color3");
});
linearGrdiantFour.addEventListener("click" , ()=>{
    createColor("color4");
});
function createColor(color){
    if(color == "color1"){
    document.body.style.background = "linear-gradient(to left,rgb(255, 0, 0),rgb(255, 94, 0))";
    }
    else if(color == "color2"){
    document.body.style.background = "linear-gradient(to left,rgb(253, 253, 99),rgb(16, 250, 16))";
    }
    else if(color == "color3"){
    document.body.style.background = "linear-gradient(to left,rgb(28, 255, 255),rgb(251, 85, 113))";
    }
    else if(color == "color4"){
    document.body.style.background = "linear-gradient(to left,rgb(24, 23, 23),rgb(85, 83, 83))";
    }
    localStorage.setItem("COLOR",color);
}
onload = localStorage.clear("COLOR");

if(localStorage.getItem("COLOR") == null){
    document.body.style.background = "linear-gradient(to left,rgb(255, 0, 0),rgb(255, 94, 0))";
}






audio.volume = 50/100;
volumeRange.addEventListener("input" , ()=>{
    audio.volume = volumeRange.value/100;
});
audio.playbackRate = 1;
speedRange.addEventListener("input" , ()=>{
    audio.playbackRate = speedRange.value/100;
});