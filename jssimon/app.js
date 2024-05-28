let gameSeq=[];
let userSeq=[];

let btns = ["yellow" , "red" , "purple" , "green"];

let highest =0 ;
let h3 = document.querySelector("h3");
h3.innerHTML=`Your highest score is&nbsp;<b>${highest}</b>.`;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");



document.addEventListener("keypress",function(){
    if(started == false){
        started = true;

        levelUp();
    }
    
    
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);

}


function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}

function levelUp()
{
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){
   

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
            if(level>=highest)
            {
                highest=level;
                h3.innerHTML=`Your highest score is &nbsp;<b>${highest}</b>.`;
            }
        h2.innerHTML = `Game Over!<br>Your score was <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },500);
        reset();    
    }
   
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
}

