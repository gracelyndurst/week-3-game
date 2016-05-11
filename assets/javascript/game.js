

function reset(){
	chosenString = wordChoices[Math.floor(Math.random() * wordChoices.length)];
	index=wordChoices.indexOf(chosenString);
	chosenImage=imgChoices[index];
	currentWord=chosenString.split("");
	guessedCorrectLetters = new Array(currentWord.length);
	guessedWrongLetters = new Array();
	guessedLetters = new Array();
	//Sets blanks for the array of correctly chosen letters
	for(i=0; i<currentWord.length; i++){ guessedCorrectLetters[i]=("_");}
	//Sets the guessCounter to 5 more than the currentWord	
	guessCounter = (currentWord.length + 5);
}
// Declare a win game counter and initialize it to 0
var wins=0;
var loss=0;

// Declares an array variable to work with
var i;
var text="";
var currentWord = [];
var wordChoices = ['maudies', 'chuys', 'jackallens', 'uchiko', 'lamberts', 'franklins', 'latraviata', 'fondasanmiguel'];
var imgChoices = ["assets/images/maudies.png", "assets/images/chuys.gif", "assets/images/jack-allens-logo.png", "assets/images/uchiko.png", "assets/images/lamberts.png", "assets/images/franklins_BBQ.jpg", "assets/images/latraviata.jpg", "assets/images/fonda_san_miguel.jpg"];

//Randomly chooses a string from an array wordChoices
var chosenString = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var index=wordChoices.indexOf(chosenString);
var chosenImage=imgChoices[index];
	//console.log(imgChoices[index]);
//Changes chosen string into an array
var currentWord=chosenString.split("");
var guessedCorrectLetters = new Array(currentWord.length);
var guessedWrongLetters = new Array();
var guessedLetters = new Array();
	//Sets blanks for the array of correctly chosen letters
	for(i=0; i<currentWord.length; i++){/*text+=currentWord[i];*/ guessedCorrectLetters[i]=("_");}
	//Sets the guessCounter to 5 more than the currentWord	
	var guessCounter = (currentWord.length + 5);
	
			//var d = currentWord.join("");
			//console.log(d);

	//waits for keyup event to trigger the start of the game
	document.onkeyup = function(event) {var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if((userGuess=='1') || (userGuess == '2') || (userGuess == '3') ||
				(userGuess == '4') || (userGuess == '5') || (userGuess == '6') ||
				(userGuess == '7') || (userGuess == '8') || (userGuess == '9') || 
				(userGuess == '0')){return false;}
		//Makes sure user types valid letter and then if letter chosen already
		if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') || 
			(userGuess == 'd') || (userGuess == 'e') || (userGuess == 'f') || 
			(userGuess == 'g') || (userGuess == 'h') || (userGuess == 'i') || 
			(userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') || 
			(userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') || 
			(userGuess == 'p') || (userGuess == 'q') || (userGuess == 'r') || 
			(userGuess == 's') || (userGuess == 't') || (userGuess == 'u') || 
			(userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') || 
			(userGuess == 'y') || (userGuess == 'z')){

				for(i=0; i<guessedLetters.length; i++){
					if(userGuess===guessedLetters[i]){return false;}
				}

			}

			//Iterate thru array comparing userguess to current word
			//rplc matching letter in guessedCorrectLetters array
			for(i=0; i<currentWord.length; i++){				  						
				if (userGuess===currentWord[i]){
					guessedCorrectLetters[i]=userGuess;
				}
				else{var temp=userGuess;
				}
			}
			//adding wrong guess to guessedWrongLetters
					guessedWrongLetters.push(temp);
			//putting wrong guess to beginning of guessedLetters
					guessedLetters.unshift(userGuess);
					//console.log(guessedLetters[0]);


			//converts arrays to strings then compares
			//if they match increment wins
			var a = currentWord.join(" ");
			//console.log(a);
			var b = guessedCorrectLetters.join(" ");
			//console.log(b);
			var c = guessedWrongLetters.join(" ");
			//console.log(c);
			if(a===b){
				wins++;
				var winImage=chosenImage;
				reset();
				document.getElementById("image1").src = winImage; 
			}

	//decreases the guess counter by 1
	guessCounter=(guessCounter-1);
	//checks to see if number of guesses has been exhausted
		if(guessCounter<1){
			wins=0;
			reset();
			document.getElementById("image1").src ="assets/images/food_plate.jpg";

		}
	
			var html = "<h4>Choose a letter.</h4>" +
			"<p></p>" +
			"<h4>Wins : " + 
			wins + 
			"</h4>" +
			"<h4>Current Word : " + 
			b + 
			"</h4>" +
			"<h4>Number of Guesses Remaining : " + 
			guessCounter + 
			"</h4>" +
			"<h4>Letters Already Guessed : " + 
			 c + 
			"</h4>";
			//Placing the html into the game console
			document.querySelector('#game_console').innerHTML=html;

}

