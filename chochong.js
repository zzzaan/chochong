let GAME_TIME = 10;
let TOTAL_TIME = 60;
let score = 0;
let time = GAME_TIME;
let tottime = TOTAL_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];
const wordDisplay = document.querySelector('.word-display');
const wordInput = document.querySelector('.wordinput');
const scoreDisplay = document.querySelector('.score');
const tottimeDisplay = document.querySelector('.tottime');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init(){
  time = GAME_TIME;
  getWords();
  wordInput.value ="";
  wordInput.focus();
  wordInput.addEventListener('input',checkMatch)
}

//게임실행
function run(){
  wordInput.value ="";
  if(isPlaying){
    return;
  }
  Tot_countDown();
  isPlaying = true;
  score = 0;
  time = GAME_TIME;
  tottime = TOTAL_TIME;

  wordInput.focus();
  const randomIndex = Math.floor(Math.random() * words.length);
  wordDisplay.innerText = words[randomIndex]
  scoreDisplay.innerText = 0;
  timeInterval = setInterval(countDown, 10000);
  checkInterval = setInterval(checkStatus, 50);
  btnChange('게임중')
}

function checkStatus(){
  if(isPlaying && time === 0){
    btnChange('다시하기')
    wordInput.value ="";
    clearInterval(checkInterval)
  }
}

//단어 불러오기
function getWords(){
  words = ['민간인황찬우','민간인임혁진','박병국하사','정지환병장','황윤성병장','김태욱상병','박상민상병','양준석상병','박수오상병','이혁진상병','서준하상병','전병헌상병','남현욱일병','류수한일병','채현기일병','김도원이병','김성욱이병','박성민이병','신세민병장','이종빈병장','김현진병장','장관태병장','박진현병장','윤영재상병','박재성상병','황인환상병','양순호상병','임찬우일병','김주혁일병','김준형병장','김경제병장','진민균병장','김종원상병','최세훈상병','신우진상병','조민우상병','김용진상병','서재훈일병','권용덕상병','한설희일병','장갑차조종수','조종교육단','개인임무분담제','복무신조','휴대폰연등','라면연등','동숙조교','초과근무일지','상사진민섭','조은환대위','오우석대위','탈모대위기','김태규대위','파도막이개방','엔진실접근문','내부잠금쇠','엔진정지솔레노이드','수동식펌프','마찰제동손잡이','방위각잠금쇠','걸쇠손잡이','탁구족구농구','장갑관법사면','울타리순찰','시멘트작업','전역하고싶다','건강하게다치지말고','아또근무야','행정관님도무심하시지','시기다른래퍼들의반대편을'];
  btnChange('게임시작')
}

//단어일치 체크
function checkMatch(){
  if(wordInput.value === wordDisplay.innerText && isPlaying){
    console.log(wordInput.value, '정답')
    wordInput.value ="";
    if(!isPlaying){
      return;
    }
    score++;
    scoreDisplay.innerText = score;
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex]
    time = GAME_TIME;
  }
}


function Tot_countDown(){
  tottime > 0 && isPlaying ? tottime-- : isPlaying = false;
  if(!isPlaying){
    clearInterval(timeInterval)
  }
  tottimeDisplay.innerText = tottime;
}

function countDown(){
  time > 0 && isPlaying ? time-- : isPlaying = false;
  if(!isPlaying){
    clearInterval(timeInterval)
  }
  timeDisplay.innerText = time;
}

function btnChange(text){
  button.innerText = text;
  text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}
setInterval(Tot_countDown,1000);
setInterval(countDown,1000);
btnChange('게임시작');
