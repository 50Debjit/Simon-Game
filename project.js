let gamesql=[];
let usersql=[];
let level=0;
let btns=["red" ,"yellow", "green" ,"violet"];
let Started=false;
let h2= document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(Started==false){
    console.log("Game Started");
    Started=true;
    levelup();
    }
});
function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}
function levelup(){
    usersql=[];
    level++;
    h2.innerText=`Level ${level}`;
    
let RandIndx=Math.floor(Math.random()*3);
let randClr= btns[RandIndx];
let randbtn=document.querySelector(`.${randClr}`);
// console.log(RandIndx);
// console.log(randClr);
// console.log(randbtn);
gamesql.push(randClr);
console.log(gamesql);
btnflash(randbtn);
}
function checkAns(idx){
    
    if(usersql[idx]==gamesql[idx]){
        if(usersql.length==gamesql.length){
          setTimeout(levelup,1000); 
        }
        console.log("Same value");
    } 
    else{
        h2.innerHTML=`Game over! Your score was ${level} <br> Press Any Key`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    userinput=btn.getAttribute("id");
    usersql.push(userinput);
    checkAns(usersql.length-1);
}
let allbtns= document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    Started=false;
    gamesql=[];
    usersql=[];
    level=0;
}