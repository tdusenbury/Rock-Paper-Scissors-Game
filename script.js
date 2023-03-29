function AskPlayerToPlay() {
    let text = "Do you want to play Rock Paper Scissors";
    if (confirm(text) == true) {
      text = "You pressed OK!";
      return true;
    } else {
      text = "You canceled!";
      return false;
    }
    document.getElementById("demo").innerHTML = text;
}
function askPlayerRPS() {
  var playersChoice = prompt("Please enter R, P, or S!");
  if (playersChoice!="R" &&  playersChoice!="P" &&  playersChoice!="S") {
    alert("Please enter only  R, P, or S!"); 
  }
  return playersChoice;
}

var ties = 0;
var wins = 0;
var losses = 0;
possibleChoices = ['R', 'P', 'S']

while (true){
  if (AskPlayerToPlay())
  {
    var playersChoice = askPlayerRPS();
    var generatedChoice = possibleChoices[Math.floor(Math.random() * 3)];
    if (generatedChoice === playersChoice)
      {
        ties++;
        alert("It's a tie!!!s"); 
      }
      


  }
  else {
    break;
  }
}