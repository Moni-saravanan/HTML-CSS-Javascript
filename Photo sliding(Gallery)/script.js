let prev=document.getElementById("prev");
let next=document.getElementById("next");
let photo_container=document.getElementById("img");
let images=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","tweleve","thirteen"];
var i=0;
next.addEventListener('click', ()=>{
    if(i<images.length-1) {
        i++;
    }
    else{
        i=0;
    }
    photo_container.src="/images/"+images[i]+".jpeg"
});
prev.addEventListener('click', ()=>{
    if(i>0) {
        i--;
    }
    else{
        i=images.length-1;
    }
    photo_container.src="/images/"+images[i]+".jpeg"
});
