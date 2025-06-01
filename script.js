
const audio = document.querySelector("audio");

function openLetter(){
  audio.play();
  const env = document.querySelector('.envelope');
  env.style.transform = 'translateY(100px)';
  const lid = document.querySelector('.lid');
  lid.style.transform = 'rotateX(180deg)';
  lid.style.zIndex = 1;
  const lett = document.querySelector('.letter');
  lett.style.transform = 'translateY(-50px)';
  const heart = document.querySelector('#heart');
  heart.style.zIndex = 3;
  const cover1 = document.querySelector('.cover1');
  cover1.style.pointerEvents = 'none';
  const cover2 = document.querySelector('.cover2');
  cover2.style.pointerEvents = 'none';
}
function takeOut(){
  const lett = document.querySelector('.letter');
  lett.style.animationName = 'readDisplay';
  const env = document.querySelector('.envelope');
  env.style.transform = 'translateY(130px)';
  const heart = document.querySelector('#heart');
  heart.style.transform = 'translateY(300px)';
  const pine = document.querySelector('.pineapple');
  pine.style.top = '1080px';
  pine.style.left = '440px';
  const endGap = document.querySelector('.end-gap');
  endGap.style.height = '175px';
}
function pineappleGo(){
  const pine = document.querySelector('.pineapple');
  pine.style.visibility = 'visible';
  pine.style.animationName = 'go';
}


const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");

const speakers = document.querySelectorAll('.speaker');

speakers.forEach(function(speaker) {
    speaker.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.toggle('on');
    });
});

function mute(){
  if(audio.volume == 1){
    audio.volume = 0;
  } else{
    audio.volume = 1;
  }
}