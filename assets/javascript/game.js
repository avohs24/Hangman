
//POSSIBLE WORDS
var words = ["street", "dogs", "cats"]

//GENERATING A RANDOM WORD FROM ABOVE
var random = Math.floor((Math.random()*(words.length)));
var randomWord = words[random];
var spaces = new Array(randomWord.length);
var wins = 0;
var remainingGuesses = 8;


for (var i = 0; i < spaces.length; i++) {
	spaces[i] = "_    ";
}

function printSpaces(){
	for (var i = 0; i < spaces.length; i++) {
		var guessLine = document.getElementById("guessLine");
		var printOnGuessLine = document.createTextNode(spaces[i]);
		guessLine.appendChild(printOnGuessLine);
	}
}

printSpaces();
console.log(randomWord);


//DETERMINING USERS GUESS AND IF IT IS IN THE STRING
document.onkeyup = function(event) {
	var userGuess = event.key; 

		for (var i = 0; i < words.length; i++){
			var guessLetter = words[i].charAt(i);
			if (guessLetter != userGuess) {
				remainingGuesses-1;
				var UsedLettersDiv =  document.getElementById("letters");
				var newDiv = document.createElement("div");
				newDiv.innerHTML = userGuess[i];
				UsedLettersDiv.appendChild(newDiv);
			}
			else if (guessLetter === userGuess) {
				var rightAnswer = document.getElementById("guessLine");
				var answerDiv = guessLine;
				answerDiv.innerHTML = userGuess[i];
				rightAnswer.appendChild(answerDiv);
				//ADD IN PLACEMENT OF CORRECT LETTER IN OPEN SPACE
				
			}




		}
	}



/*var targetDiv = document.getElementById("guessLine");


	if(document.onkeyup == words[i]) {
			document.getElementById("guessLine").innerHTML = rightLetter;

		}
}*/

/*var wins = 0;
var guesses = 8;


document.onkeyup = function(guess) {
	var userGuess = event.key; 

	if(userGuess = wordLetter) {
		document.write(wordLetter);
	}
}*/




// var rate = new Array(randomWord.length);
// var l = 0;

// for (var i=0; i < rate.length; i++) {
// 	rate[i] = "__";
// }

// function printRate(){
// 	for (var i = 0; i < rate.length; i++){
// 		var guessLine = document.getElementById("guessLine");
// 		var k = document.createTextNode(rate[i]);
// 			guessLine.appendChild(k);
// 	}
// }

// printRate();













