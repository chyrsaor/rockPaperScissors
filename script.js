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
    let Choice = prompt("Rock, Paper or Scissor?", "rock");
    Choice = Choice.toLowerCase();

    if(Choice == "rock"){
        return "rock";
    }else if(Choice == "paper"){
        return "paper";
    }else if(Choice == "scissor"){
        return "scissor";
    }else{
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

        if(computer == human){
            return "tie";
        }else if(computer=="rock" && human=="paper"){
            console.log(`You win paper beats rock.`);
            return 'human';
        }else if(computer=="rock" && human=="scissor"){
            console.log(`You lose rock beats scissor.`);
            return 'computer';
        }else if(computer=="scissor" && human=="paper"){
            console.log(`You lose scissors beats paper.`);
            return 'computer';
        }else if(human=="scissor" && computer=="paper"){
            console.log(`You win scissors beats paper.`);
            return 'human';
        }else if(human=="scissor" && computer=="paper"){
            console.log(`You lose scissors beats paper.`);
            return 'computer';
        }else if(human=="scissor" && computer=="paper"){
            console.log(`You lose scissors beats paper.`);
            return 'computer';
        }else{
            console.log(computer, human);
            console.log("unknown case");
        }
    }

    for(let i = 1; i<=5; i++){
        let winner = playRound(getComputerchoice(), getHumanChoice());
        if( winner = 'human'){
            humanScore += 1;
        }else if(winner = 'computer'){
            computerScore += 1;
        }else if(winner = 'tie'){
            humanScore += 0.1;
            computerScore += 0.1;
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