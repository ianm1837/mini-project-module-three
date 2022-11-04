// Assignment code here
var Wins = 0;
var Losses = 0;
var Ties = 0;

var RPS = "RPS";

//while
var personRPS = String(prompt("Enter R, P, or S"));

var computerRPS = String(RPS.charAt(Math.floor(Math.random() * RPS.length)));

//handle RPS was actually typed

var message = "";

if(personRPS == computerRPS)
{
    Ties++;
    message = "You tie!";
}
else if(personRPS == "R" && computerRPS == "S" || personRPS == "P" && computerRPS == "R" || personRPS == "S" && computerRPS == "P")
{
    Wins++;
    message = "You win!";
}
else 
{
    Losses++;
    message = "You lose!";
}

alert("The computer choses " + computerRPS + ".  " + message);