
let popup=document.querySelector(".popup");
let login=document.getElementById("btn");
// alert(login)
function toggle()
{
       if(login.innerText==="Login")
       {
        alert("Please Login First");
        return;
       }
    if(popup.style.display==="none")
    {
        popup.style.display="flex";
    }
    else popup.style.display="none";
}



//let's get that close..

let cls=document.querySelector(".close");

cls.addEventListener('click',toggle);


let str=document.querySelector(".start");
str.addEventListener('click',toggle);



login.addEventListener('click',()=>{
    if(login.innerText!="Login")return;
   let name= prompt("Enter Your Name");
    login.innerHTML=`<span style="color: #FCC822; font-size: large;"><i class="fa-brands fa-servicestack"></i> ${name} <i class="fa-solid fa-caret-down"></i></span>`;
})
let totalScore=0;

let first=false;
function check(x,a1) 
{
    if(first)return;
    first=true;
   let card=document.querySelectorAll(".card");    
   card[x-1].style.backgroundColor="#FCC822";
    if(x==a1)
    {
        let score=document.querySelector(".score");
        score.innerText="Score: "+ (totalScore=totalScore+5);
    }

    if(x===a1){
        alert("Your Answer is Correct!!");
    }
    else alert("Your Answer is Wrong!!!");
    
}
let currQ=1;
let nextBtn=document.querySelector(".next");
let pervBtn=document.querySelector(".prev");

let skipBtn=document.querySelector(".skip");
let submit=document.querySelector(".submit");

function nextQuestion(cq,nq,isPrev) 
{
    if(isPrev && cq==1){
    pervBtn.style.display="none";
        return;}
    if(currQ==4 && isPrev==false)
    {
      return
    };

    if(nq==4)
    {
       nextBtn.style.display="none";
       skipBtn.style.display="none";
       submit.style.display="flex";
      
    }
    else
    {
        nextBtn.style.display="flex"; 
        skipBtn.style.display="flex"
        submit.style.display="none";
            
    }
    pervBtn.style.display="flex";

    if(nq==1) pervBtn.style.display="none";


    first=false;
    let cls=".que"+cq;

    let cqd=document.querySelector(cls);

    cqd.style.display="none";

    let cln=".que"+nq;
    currQ=nq;

    let nqd=document.querySelector(cln);

    nqd.style.display="flex";
}




nextBtn.addEventListener('click',()=>{
    nextQuestion(currQ,currQ+1,false);
});





pervBtn.addEventListener('click',()=>{
    nextQuestion(currQ,currQ-1,true);
});


skipBtn.addEventListener('click',()=>{
    nextQuestion(currQ,currQ+1,false);
})

let homepage=document.querySelector(".homepage");
let questions=document.getElementById("questions");

let afterTest=document.querySelector(".afterTest");

let scoreAfterTest=document.getElementById("afterTest");

submit.addEventListener('click',()=>
{
   afterTest.style.display="flex";

    scoreAfterTest.innerText="YOU SCORE IS: "+totalScore;
    totalScore=0;
    questions.style.display="none";
});



let startQuiz=document.getElementById("startQuiz");

let badges=0;
function badge(badgeNo)
{
   
    let id=".badge"+badgeNo;
    let si=document.querySelector(id);
    function toggle() {
        if(si.style.border!="2px solid black"){
            si.style.border="2px solid black";
            ++badges;
            return;
        }
        si.style.border="none";
       if(badges>0)--badges;
    }
    toggle();
}


startQuiz.addEventListener('click',()=>
{
    if(badges<5)
    {
        alert("You have selected Only: "+badges);
        return;
    }
    homepage.style.display="none";
    questions.style.display="flex";
    popup.style.display="none";
});


let closeAfterTest=document.querySelector(".closeAfterTest");

closeAfterTest.addEventListener('click',()=>{
    homepage.style.display="flex";
   afterTest.style.display='none';
})

function howit(params) {
    alert("First Login and then Click on Start Quiz Button");
}

function about() {
    alert("Author:- Aniket Khanagar");
}

function feature(){
    alert("You Can Give the Mock on this platform!");
}


















