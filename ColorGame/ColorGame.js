var colors = [rgb(),rgb(),rgb(),rgb(),rgb(),rgb()];				
var pickedColor = colors[randomInteger(0,5)];

var answer = document.getElementById("answer");
answer.textContent = pickedColor;

var squares = document.querySelectorAll(".square");		
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("newBtn");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var body = document.querySelector("body");

/*
 * Events reacting to the user clicking the button "New colors/Play Again".
*/
resetBtn.addEventListener("click", function(){
	resetBtn.textContent = "NEW COLORS";
	changeMode();
	hardMode();
});

/*
 * Events reacting to the user clicking the button "easy".
*/
easyBtn.addEventListener("click", function(){
	changeMode();
	easyMode();
});

/*
 * Events reacting to the user clicking the button "hard".
*/
hardBtn.addEventListener("click", function(){
	changeMode();
	hardMode();
});

/*
 * Default scene opener set to "hard" mode.
*/
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			matchColors(clickedColor);
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			resetBtn.textContent = "PLAY AGAIN";
		}
		else {
			this.style.backgroundColor = "#404040"
			messageDisplay.textContent = "Try again!";
		}
	});
}	

/*
 * removes content after changing the difficulty mode.
*/
function changeMode(){
	message.textContent = " "
	hardBtn.classList.remove("selectedGameMode");
	easyBtn.classList.remove("selectedGameMode");
	h1.style.backgroundColor = "steelblue";
}

/*
 * initializes the scene according to the hard mode.
*/
function hardMode(){
	hardBtn.classList.add("selectedGameMode");
	colors = [rgb(),rgb(),rgb(),rgb(),rgb(),rgb()];
	pickedColor = colors[randomInteger(0,5)];
	answer.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
}

/*
 * initializes the scene according to the easy mode.
*/
function easyMode(){
	easyBtn.classList.add("selectedGameMode");
	colors = [rgb(),rgb(),rgb()];
	pickedColor = colors[randomInteger(0,2)];
	answer.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i])
			squares[i].style.backgroundColor = colors[i];
		else 
			squares[i].style.display = "none";
	}
}

/*
 * Changes the color of all the squares to the picked color 
 * when user chooses the right answer.
*/
function matchColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

/*
 * Generates a string of the format "rgb(###, ###, ###)".
*/
function rgb(){
	var string = "rgb(";
	string += randomInteger(0,255) + ", ";
	string += randomInteger(0,255) + ", ";
	string += randomInteger(0,255) + ")";
	return string;
}

/*
 * Generates random rgb numbers from 0 ~ 255.
*/
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
