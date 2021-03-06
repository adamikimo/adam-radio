var after = document.querySelector('.after');
var before = document.querySelector('.before');
var audioCounter = 0;
var audio = document.querySelector('.audio');
var boolean = true;
var playPause = document.querySelector('.playPause');
var audioTitle = document.querySelector('.audio-title');
var liveRadioNames = [];
liveRadioNames[0] = "NILE FM";
liveRadioNames[1] = "ALJAZAIR RADIO";

var liveRadioStations = [];
liveRadioStations[0] = "https://ice1.securenetsystems.net/DEMOSTN?playSessionID=A7F278BC-EBCC-9B91-A947A1C7020EE682";
liveRadioStations[1] = "https://chlef.ice.infomaniak.ch/02.aac";

playPause.addEventListener("click" , ()=>{
if(boolean == true){
playPause.src = "./pause.png";
audio.play();
boolean = false;
}
else if(boolean == false){
playPause.src = "./play.png";
audio.pause();
boolean = true;
}
});
function radioCounter(){
    audio.src = liveRadioStations[audioCounter];
    audioTitle.innerHTML = liveRadioNames[audioCounter];
}
radioCounter();
after.addEventListener("click" , ()=>{
    if(audioCounter<liveRadioStations.length-1){
    ++audioCounter;
    }else{
        audioCounter = 0;
    }
    radioCounter();
});
before.addEventListener("click" , ()=>{
    if(audioCounter>0){
    --audioCounter;
    }else{
        audioCounter = liveRadioStations.length-1;
    }
    radioCounter();
});
