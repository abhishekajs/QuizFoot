var readlineSync = require('readline-sync');
const chalk = require('chalk');

//Getting username of the player
var userName = readlineSync.question(chalk.black.bgGreen.bold.underline("Enter your name :"));
console.log(chalk.white.bgRed("\nWelcome " + userName + "!"));
console.log("\n-------Let's play a football quiz--------");

//giving brief about the quiz
console.log(chalk.grey.bold.underline("\nYou will be given 4 options for every question. Out of which you have to choose one option for answering correct answer. The most correct answer the better your final score will be. So let's get started. All the best!\n"));
console.log(chalk.bold.underline.bgWhite.black("Here is your first question:\n"));

//initializing score = 0
score = 0;

//creating function
function play(question, answer) {
  var userOption = readlineSync.question(question);
  if (userOption.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.black.bgGreen("\nCorrect!"));
    score++;
  } else{
    console.log(chalk.white.bgRed("Wrong!"));
  }
  console.log(chalk.bgBlue.white("Current Score is : " + score + "\n"));
}

//assigning set of questions
var questions = [{
  question : "Which country won the first ever World Cup in 1930? \n(a) Brazil \n(b) Argentina \n(c) Uruguay \n(d) Italy\n\nEnter the option : " ,
  answer : "c"
}, {
  question : "Which club has won most English Premiere League Titles? \n(a) Chelsea \n(b) Manchester United \n(c) Manchester City \n(d) Liverpool\n\nEnter the option : " ,
  answer : "b"
}, {
  question : "The 2026 World Cup will be hosted across three different countries. Can you name them? \n(a) Brazil, Peru, Argentina \n(b) England, Wales, Scotland \n(c) Italy, Spain, France \n(d) United States, Mexico, Canada\n\nEnter the option : " ,
  answer : "d"
}, {
  question : "India started the 2019 AFC Asian Cup with a thrilling win over which team? \n(a) Bahrain \n(b) Thailand \n(c) Qatar \n(d) UAE\n\nEnter the option : " ,
  answer : "b"
}, {
  question : "Which club has won the most Champions League titles? \n(a) Real Madrid \n(b) Bayern Munich \n(c) AC Milan \n(d) Liverpool\n\nEnter the option : " ,
  answer : "a"
}, {
  question : "Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid? \n(a) 28 \n(b) 9 \n(c) 17 \n(d) 21\n\nEnter the option : " ,
  answer : "b"
}, {
  question : "Which club is sometimes referred to as FC Hollywood? \n(a) Bayern Munich \n(b) LA Galaxy \n(c) Juventus \n(d) Tottenham\n\nEnter the option : "  ,
  answer : "a"
}, {
  question : "Which of these players have scored a goal in an Indian Super League final? \n(a) Mohammad Rafique \n(b) Iain Hume \n(c) Elano \n(d) Roy Krishna\n\nEnter the option : " ,
  answer : "a"
}, {
  question : "Which MLS franchise team does David Beckham own? \n(a) Orlando City SC \n(b) Sporting Kansas City \n(c) Toronto FC \n(d) Inter Miami\n\nEnter the option : " ,
  answer : "d"
}, {
  question : "Messi has won a record number of Ballon d'Or awards - how many? \n(a) 5 times \n(b) 7 times \n(c) 6 times \n(d) 4 times\n\nEnter the option : ",
  answer : "c"
}]

//accessing the questions
for(var i = 0; i < questions.length; i++) {
  var currentQuestion  = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.white.bgRed("Your final score is : " + score + "\n"));

if(score > 9) {
  console.log(chalk.black.bgGreen.bold.underline("Amazing! You hit bullseye...\nHave a nice day!!!"));
}
else if(score >=7 && score != 10) {
  console.log(chalk.black.bgGreen.bold.underline("Almost bullseye...Keep trying.."));
}
else {
  console.log(chalk.black.bgGreen.bold.underline("Keep trying...You can do better..."));
}