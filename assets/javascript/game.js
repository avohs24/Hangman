
//POSSIBLE WORDS
var words = ["toyota", "ferrari", "ford", "porsche", "mercedes", "chevrolet"]

//GENERATING A RANDOM WORD FROM ABOVE
var random = Math.floor((Math.random()*(words.length)));
var randomWord = words[random].split("");
var spaces = [];
var wins = 0;
var remainingGuesses = 8;
var honk = new Audio("../sounds/HornHonk.mp3");
var engineRev = new Audio("../sounds/EngineRev.wav")


for (var i = 0; i < randomWord.length; i++) {
	spaces[i] = "_ ";
}

function printSpaces(){
	for (var i = 0; i < spaces.length; i++) {
		var guessLine = document.getElementById("guessLine");
		var printOnGuessLine = document.createTextNode(spaces[i]);
		guessLine.appendChild(printOnGuessLine);
	}
}

printSpaces();
console.log(randomWord, spaces);


//DETERMINING USERS GUESS AND IF IT IS IN THE STRING
document.onkeyup = function(event) {
	var userGuess = event.key;
	var match = false;
	var guessLetter;

		//FOR LOOP CHECKING IF USERS GUESS IS THE SAME AS
		for (var i = 0; i < spaces.length; i++){
			guessLetter = randomWord[i];
			if (userGuess == guessLetter) {
				match = true;
				spaces[i] = userGuess;
			}
		};

		if (match){
				var rightAnswer = document.getElementById("guessLine");
				rightAnswer.innerHTML = spaces.join("");
				engineRev.play();
			} else  {
				remainingGuesses = remainingGuesses-1;
				var UsedLettersDiv = document.getElementById("letters");
				var newDiv = document.createElement("div");
				newDiv.innerHTML = userGuess;
				UsedLettersDiv.appendChild(newDiv);

				var RemaingingGuessesDiv = document.getElementById("remaining-guesses-div");
				var guessesDiv = document.createElement("div");
				RemaingingGuessesDiv.innerHTML = remainingGuesses;
				honk.play();
			}

}
		function roundComplete(){

			if (randomWord.length == randomWord[i].length) {
			wins = wins++;
			alert('You win!')
			var WinsCount = document.getElementById("wins");
			var newWinsDiv = document.createElement("div");
			WinsCount.innerHTML = wins;
		} else if (remainingGuesses == 0) {
			alert('You Lose!');
		}

	roundComplete();
}
