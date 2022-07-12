var seconds=00;
var tens=00;
var appendTens=document.getElementById("tens");
var appendSeconds=document.getElementById("seconds");
var start=document.getElementById("btn-start");
var stop=document.getElementById("btn-stop");
var reset=document.getElementById("btn-reset");
var interval;

function starttimer(){
    tens++;
    if(tens<9){
        appendTens.innerHTML="0"+ tens;
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML="0"+seconds;
        tens=0;
        appendTens.innerHTML="0"+0;
    }
    if(seconds>9){
        appendSeconds.innerHTML=seconds;
    }
}
start.onclick=function(){
    interval=setInterval(starttimer);
};
stop.onclick=function(){
    clearInterval(interval);
};
reset.onclick=function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendSeconds.innerHTML=seconds;
    appendTens.innerHTML=tens;
};
