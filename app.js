// In random when we want to generate numbers between 0-2 we will multiply Math.random()*3, if we want to generate numbers between 0-9 we will multiply it by 10. Then you can do Math.floor to remove the decimal numbers

// Tracking Scores
let user=0;
let comp=0;
let userWin=false; // For tracking who wins

// Fetching required html elements
let userChoiceElement=document.getElementById('user-choice');
let compChoiceElement=document.getElementById('comp-choice');
let userScore=document.getElementById('user-score');
let compScore=document.getElementById('comp-score');
let msg=document.getElementById('msg');
let choices=document.querySelectorAll('.choice'); // Fetching each choice div and storing it in choices div


const generateComputerChoice=()=>{
    let comp=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return comp[index];
}

const draw=()=>{
    msg.innerText="Its a Draw!";
}

const win=()=>{
    if(userWin){
        msg.innerText="You Win!";
        user++;
    }
    else{
        msg.innerText="You Lose!";
        comp++;
    }
    userScore.innerText=user;
    compScore.innerText=comp;
}

const checkWinner=(userChoice,compChoice)=>{
    if(userChoice===compChoice){
        draw();
    }
    else{
        if(userChoice==="rock")
            {
                userWin=compChoice==="scissors"?true:false;
            }
            else if(userChoice==="paper")
            {
                userWin=compChoice==="rock"?true:false;
            }
            else if(userChoice==="scissors")
            {
                userWin=compChoice==="paper"?true:false;
            }

        win(userWin);
    }

}

const showChoice=(userChoice,compChoice)=>{
    userChoiceElement.innerText+=userChoice.toUpperCase();
    compChoiceElement.innerText+=compChoice.toUpperCase();
    checkWinner(userChoice,compChoice);
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userChoiceElement.innerText="";
        compChoiceElement.innerText="";
        let userChoice=choice.getAttribute("id");
        compChoice=generateComputerChoice();
        showChoice(userChoice,compChoice);
    });
})

