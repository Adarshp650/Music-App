console.log("welcome to spotify")
let songIndex=0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"whatever1",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"whatever2",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"whatever3",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"whatever4",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"whatever5",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"whatever6",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"whatever7",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"whatever8",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"whatever9",filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"whatever10",filePath:"song/10.mp3",coverPath:"covers/10.jpg"}
]
songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play();
//handle play /pause click
masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity=1;
    }
    else{
    audioElement.pause();
     masterPlay.classList.remove('fa-pause-circle');
     masterPlay.classList.add('fa-play-circle');
     gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})

myProgressBar.addEventListener('click',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100; 
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        // if(audioElement.paused){
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
        // } //----
        // else{
        //     e.target.classList.remove('fa-pause-circle');
        //     e.target.classList.add('fa-play-circle');
        // }
        audioElement.src=`song/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=9){
    songIndex=0;
}else{
    songIndex+=1;
}
audioElement.src=`song/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })