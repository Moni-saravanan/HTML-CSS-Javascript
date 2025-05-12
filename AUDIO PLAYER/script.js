let prev=document.getElementById("prev");
let next=document.getElementById("next");
let vup=document.getElementById("vup")
let vdown=document.getElementById("vdown")
let play1=document.getElementById("play")
let img=document.getElementById("img");
let playBtn=document.getElementById("playBtn");
let pauseBtn=document.getElementById("pauseBtn");
let photos=["one.jpeg","girlfriends.png","girl.jpg","father.jpg","gang.jpg","mother.jpg","dogs.jpg","tomandjerry.jpg","girlfriends.jpg","krishna.jpg","babycouple.jpg","heart.jpg","shivam.jpg"];
let song=["one","boysfriends","girl","father","gang","mother","dogs","tomandjerry","girlfriends","krishna","babycouple","heart","shivam"];

let Player=new Audio("/one.mp3");

play1.addEventListener('click', () => {
    if (playBtn.className === "fa fa-pause") {
        // Song is playing → pause it
        playBtn.className = "fa fa-play";
        Player.pause();
    } else {
        // Song is paused → play it
        playBtn.className = "fa fa-pause";
        Player.play();
    }
});

let i=0;
next.addEventListener('click',()=>{
    playBtn.className = "fa fa-pause"
    if(i<photos.length-1){
        i++;
    }
    else{
        i=0;
    }
    Player.src="/"+song[i]+".mp3"
    Player.play();
    img.src="/"+photos[i]
})

prev.addEventListener('click',()=>{
    playBtn.className = "fa fa-pause"
    if(i>0){
        i--;
    }
    else{
        i=photos.length-1;
    }
    Player.src="/"+song[i]+".mp3"
    Player.play();
    img.src="/"+photos[i]
})
Player.volume=0.1;
vup.addEventListener('click',()=>{
    Player.volume=Player.volume+0.1;
})

Player.volume = 0.1;

vup.addEventListener('click', () => {
    if (Player.volume < 1.0) {
        Player.volume = Player.volume + 0.1; 
    }
});

vdown.addEventListener('click', () => {
    if (Player.volume > 0.0) {
        Player.volume = Player.volume - 0.1;
    }
});


let restart = document.getElementById("restart");

restart.addEventListener('click', () => {
    Player.currentTime = 0;
    Player.play();
});

Player.addEventListener('ended', () => {
    Player.currentTime = 0;
    Player.play();
});
