//MyLoveCalc
//JS:
//Control Statements: Using If-Else Conditionals and logic 
prompt("What is you Name?")
prompt("What is their Name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);
alert("You scre is " + loveScore + "%");
//console.log(loveScore);

prompt("What is you Name?")
prompt("What is their Name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);//1-100


if (loveScore > 70) {
alert("You score is " + loveScore + "%" + " You Love Each Other Like Beyonce & JayZee.");
} else {
alert("You score is " + loveScore + "%");
}

//Combinig comparators
prompt("What is you Name?")
prompt("What is their Name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);//1-100


if (loveScore > 70) {
alert("You score is " + loveScore + "%" + " You Love Each Other Like Beyonce & JayZee.");
} 

if (loveScore > 30 && loveScore <= 70) {
alert("You score is " + loveScore + "%");
}


if (loveScore <= 30 && loveScore <= 70) {
alert("You score is " + loveScore + "%" + "You go together like oil and water");
}