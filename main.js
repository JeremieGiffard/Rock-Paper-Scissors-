let playerScore = 0;
let computerScore = 0;
let playerSelection;

// 1- function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function computerPlay()
{
    let choices = ['Rock', 'Paper', 'Scissors'];
    let positionArray = Math.floor(Math.random()*choices.length);
    let computerChoice = choices[positionArray];
    return computerChoice ;
}


// 2- function that ask player to choose either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function playerPlay()
{
    let getChoice = prompt("Please select either Rock , Paper ou Scissors");
    // 2.1- Make function’s parameter case-insensitive
        // make first letter uper case
        let firstLetter = getChoice.slice(0,1).toUpperCase();
        // make rest lower case
        let restOfString = (getChoice.slice(1)).toLowerCase();
    let playerChoice= firstLetter + restOfString;
    
    
    //2.2 SecurityCheck for right input
    if(playerChoice == 'Rock' || playerChoice == 'Paper' || playerChoice == 'Scissors' )
    {
        //console.log(`good input`);
        return playerChoice;
        
    }
    else 
    {
        console.log(`wrong input, Please select either Rock , Paper ou Scissors`);
        //CallBack
        playerPlay();
    }
    
    
}


// 3- function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = playerPlay();

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock'))
    {
        console.log(`you win- player: ${playerSelection} and computer:${computerSelection}`);
        playerScore++ ;
    }
    else if(playerSelection == computerSelection)
    {
        
        console.log(`It's a tie player:${playerSelection} and computer:${computerSelection}`);
    }
    else{
        console.log(`You lose- player: ${playerSelection} and computer:${computerSelection}`);
        computerScore++ ;
    }
}


// 4- Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 

//At this point you should be using console.log() to display the results of each round and the winner at the end.

function game()
{
    for(let i = 1; i <=5; i++)
    {
        playRound();
        console.log(`tour ${i} : playerScore ${playerScore}`);
    }
    if(playerScore> computerScore)
    {
        console.log(`End of the game, you WIN !`)
    }
    else if (playerScore < computerScore)
    {
        console.log(`End of the game, you LOOSE !`)
    }
    else {
        console.log(`End of the game, it's a TIE !`)
    }
}
game()




// 5- Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
//Feel free to create more “helper” functions if you think it would be useful.