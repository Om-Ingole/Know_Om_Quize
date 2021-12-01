var readlineSync = require("readline-sync");

var score =0;
var highScores =[
  {
    name: "Jadu",
    score:4,
  },
  {
    name:"Ramu",
    score:8,
  },
]

var questions =[
  {
    question:"Which bike is most fuel efficient in Nagpur?",
    answer:"Splender+",

  },
  {
    question:"Which Kawasaki bike has 900 cc?",
    answer:"Z900",
  },
  {
    question:"Which bike is the fastest?",
    answer:"Hayabhusa",
  }
]

function welcome(){
  var username=readlineSync.question("What's your Name?");
  console.log("Welcome "+username+ " To Bikes Quize")
  console.log("******           *******\n      ******** ")
}

function play (question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase()=== answer.toUpperCase()){
    console.log("Right answer !Wroooooom")
    score= score+1;
  }
  else{
    console.log("Wrong answer buddy")
  }
  console.log("Current Score== ",score)
  console.log("*************-------------------------------");
}
function game(){
  for(var i=0;i<questions.length;i++){
  var currentQuestion =questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
}
function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();



