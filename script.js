console.log("Wellcome to where you can play rock paper scissors!")

// generates randomized choices between [paper, rock, scissosr] by using math.random()
function getComputerchoice(){
    let rand = Math.random();

    if(rand <=0.4){
        return "paper";
    }else if(0.41 <=rand <=0.69){
        return "rock";
    }else if(0.7<= rand <= 1){
        return "scissor";
    }
}

// to get the human choice with prompt function
function getHumanChoice(){
    let Choice = prompt("Rock, Paper or Scissor?", "paper");
    Choice = Choice.toLowerCase();
    // console.log(Choice);

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

    // this function runs through the 9 possible outcomes of 
    // rock paper scissors and checks the human and computer choices 
    // against eachother and returns the winner of the round
    function playRound(computer, human){
        console.log(human, computer)
        if(human == 'no'){
            console.log('That is not in the Rules!');
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
        }
    }

    let winner = undefined;
    for(let i = 1; i<=5; i++){
        winner = playRound(getComputerchoice(), getHumanChoice());
        if( winner == 'human'){
            humanScore += 1;
            computerScore += 0;
            console.log(humanScore, computerScore);
        }else if(winner =='computer'){
            computerScore += 1;
            humanScore += 0;
            console.log(humanScore, computerScore);
        }else if(winner == 'tie'){
            humanScore += 0;
            computerScore += 0;
            console.log(humanScore, computerScore);
        }else{
            console.log("somethings awry");
        }
    }
    if(humanScore>computerScore){
        console.log(`the game is over and you won ${humanScore} to ${computerScore} `);
    }else if(humanScore<computerScore){
        console.log(`the game is over and you lost ${computerScore} to ${humanScore} `);
    }else if(humanScore == computerScore){
        console.log(`it is a tie ${humanScore} to ${computerScore}`)
    }
}

playGame();