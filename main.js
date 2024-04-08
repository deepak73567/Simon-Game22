let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let higgestScore=[];
let h2=document.querySelector("h2");
document.addEventListener("click",function()  {
    if(started==false){
        console.log("game is started");``
        started=true;
        levelUp();
        
    }

});

function gameFlash(btn) {
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash")},100);}

    function userFlash(btn) {
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash")},100);}

function levelUp(){
    userSeq=[]; // game over hone per restart
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx= Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx) {
    // console.log("curr level:",level);
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        // jab value same hogi to next ko check kernge
        //jb last indx per hoga to level up kerenge
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML= `Game Over!<br> Your score is <b>${level-1}</b> <br> press anywhere to restart`;
        let currhiggestScore =level-1;
        
            higgestScore.push(currhiggestScore);
            h=document.querySelector("h3");
            h.innerText=`  Higgest Score is  ${Math.max(...higgestScore)}`;
        
    
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    
    }}


function btnPress() {
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor)
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
