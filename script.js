console.log("welcome to spotify");
let songindex = 0;
let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");

let songs =[
    {songname:"salame ishq" , filepath:'songs/1.mp3',coverpath:"cover/1.mp3"},
    {songname:"salame ishq" , filepath:"songs/2.mp3",coverpath:"cover/1.mp3"},
    {songname:"salame ishq" , filepath:"songs/3.mp3",coverpath:"cover/1.mp3"},
    {songname:"salame ishq" , filepath:"songs/4.mp3",coverpath:"cover/1.mp3"},
    {songname:"salame ishq" , filepath:"songs/5.mp3",coverpath:"cover/1.mp3"},
    {songname:"salame ishq" , filepath:"songs/6.mp3",coverpath:"cover/1.mp3"},
    {songname:"salame ishq" , filepath:"songs/7.mp3",coverpath:"cover/1.mp3"}   
]

// audioelement.addEventListener("timeupdate",()=>{
//     console.log("timeupdate");

// })
masterplay.addEventListener('click',()=>{

    console.log("clicked");

    if (audioelement.paused || audioelement.currentTime<=0) {
        audioelement.play();
        masterplay.classList.remove('fa-solid fa-play');
    }
    else{
        audioelement.pause();
    }
    
})