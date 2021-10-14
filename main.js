// 1- function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function computerPlay()
{
    let choices = ['Rock', 'Paper', 'Scissors'];
    let positionArray = Math.floor(Math.random()*choices.length);
    let computerChoice = choices[positionArray];
    return computerChoice ;
}
const computerSelection = computerPlay();
//console.log(`${typeof computerSelection} ${computerSelection}`);



// 2- function that ask player to choose either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function playerPlay()
{
    let getChoice = prompt("Please select either Rock , Paper ou Scissors");
    // 2.1- Make function’s parameter case-insensitive
        // make first letter uper case
        let firstLetter = getChoice.slice(0,1).toUpperCase()
        // make rest lower case
        let restOfString = (getChoice.slice(1)).toLowerCase();
    let playerChoice= firstLetter + restOfString
    console.log(playerChoice.valueOf())
    
    //2.2 SecurityCheck for right input
    if(playerChoice == 'Rock' || playerChoice == 'Paper' || playerChoice == 'Scissors' )
    {
        return playerChoice;
        //console.log(`PlayerSelection: ${playerChoice}`);
    }
    else 
    {
        console.log(`wrong input, Please select either Rock , Paper ou Scissors`);
        //CallBack
        playerPlay();
    }
    
    
}
let playerSelection = playerPlay();
//console.log(`${typeof playerSelection} ${playerSelection}`)

// 3- function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(){
    
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')){
        console.log(`you win- player: ${playerSelection} and computer:${computerSelection}`);
    }
    else if(playerSelection == computerSelection)
    {
        
        console.log(`It's a tie player:${playerSelection} and computer:${computerSelection}`);
    }
    else{
        console.log(`You lose- player: ${playerSelection} and computer:${computerSelection}`);
    }
}
playRound();


//mportant note: you want to return the results of this function call, not console.log() them. To test this function console.log the results:

/* function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
*/



// 4- Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 

// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.

//At this point you should be using console.log() to display the results of each round and the winner at the end.


//Use prompt() to get input from the user. read here if need to  :https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt





// 5- Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
//Feel free to create more “helper” functions if you think it would be useful.