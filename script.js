let userScore =0;
let compScore =0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg"); 

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options =["rock","pepar","scissors"];    
    const randIdx= Math.floor(Math.random() * 3);  // Math.floor--Math.random() ka use krke random number Genrate krna
    return options[randIdx];

};

const drawGame =() =>{
    msg.innerText = "Game was Draw. Play again...";
    msg.style.backgraoundColor ="yellow";
};


const showWinner =(userWin, Userchoice,CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${Userchoice} beats ${CompChoice}`;
        msg.style.backgraoundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lose! ${CompChoice} beats your ${Userchoice}`;
        msg.style.backgraoundColor = "red";
    }

};

const playGame =(Userchoice) =>{
       //Genrate Computer Choice
    const CompChoice= genCompChoice();
  

    if(Userchoice === CompChoice ){  //Draw Game
        drawGame();
    }else{
        let userWin =true;
        if(Userchoice==="rock"){     
            //peper , scissors
            userWin= CompChoice ==="pepar" ? false : true;
        }else if(Userchoice ==="pepar"){    
            //rock , scissors
           userWin =CompChoice === "scissors" ? false : true;
        }else{                            
            //rock , pepar
           userWin= CompChoice ===  "rock" ? false : true;
        }
        showWinner(userWin, Userchoice, CompChoice);
    }

};

 
choices.forEach((choice)=>{  
    choice.addEventListener("click",()=>{
        const Userchoice=choice.getAttribute("id");
        //console.log("Choice Was Clicked" , Userchoice);
        playGame(Userchoice);

    
    });

}) ;