console.log("hello, world 1")

function getComputerchoice(){
    let rand = Math.random();

    if(rand <=0.4){
        return "Paper";
    }else if(0.41 <=rand <=0.69){
        return "Rock";
    }else if(0.7<= rand <= 1){
        return "Scissor";
    }
}


function getHumanChoice(){
    let Choice = prompt("Rock, Paper or Scissor?", "paper");
    Choice = Choice.toLowerCase();
    console.log(Choice);

    if(Choice == "rock"){
        return "rock";
    }else if(Choice == "paper"){
        return "paper";
    }else if(Choice == "scissor"){
        return "scissor";
    }else{
        console.log(Choice);
        return "no";
    }
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;


    function playRound(computer, human){
        if(human == 'no'){
            console.log('it is the prompt');
        }
        if(human=='rock' && computer=='rock'){
            return 'tie';
        }else if(human=='rock' && computer=='paper'){
            return 'computer';
        }else if(human=='rock' && computer=='scissor'){
            return 'human';
        }else if(human=='paper' && computer=='paper'){
            return 'tie';
        }else if(human=='paper' && computer=='rock'){
            return 'human';
        }else if(human=='paper' && computer=='scissor'){
            return 'computer';
        }else if(human=='scissor' && computer=='scissor'){
            return 'tie';
        }else if(human=='scissor' && computer=='rock'){
            return 'computer';
        }else if(human=='scissor' && computer=='paper'){
            return 'human';
        }else{
            console.log(computer, human);
            console.log("unknown case");
        }
    }

    console.log(playRound(getComputerchoice(),getHumanChoice()))

    // let winner = undefined;
    // for(let i = 1; i<=5; i++){
    //     winner = playRound(getComputerchoice(), getHumanChoice());
    //     if( winner = 'human'){
    //         humanScore += 1;
    //     }else if(winner = 'computer'){
    //         computerScore += 1;
    //     }else if(winner = 'tie'){
    //         humanScore += 0.1;
    //         computerScore += 0.1;
    //     }else{
    //         console.log("somethings awry");
    //     }
    // }
    if(humanScore>computerScore){
        console.log(`the game is over and you won ${humanScore} to ${computerScore} `);
    }else if(humanScore<computerScore){
        console.log(`the game is over and you lost ${computerScore} to ${humanScore} `);
    }else if(humanScore == computerScore){
        console.log(`it is a tie ${humanScore} to ${computerScore}`)
    }
}

playGame();