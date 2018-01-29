var numSquares = 6;
var colors = generateColors(numSquares); 

var sqr = document.querySelectorAll(".square"); 
var pickColor = pickedColor();
var display = document.querySelector("#display"); 
var message = document.querySelector("#message"); 
var title = document.querySelector("#tit");
var resetButt = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard"); 
display.textContent = pickColor;  


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected"); 
	easyBtn.classList.add("selected"); 
	numSquares = 3; 
	colors = generateColors(numSquares); 
	pickColor = pickedColor();
	display.textContent = pickColor; 
	for(var i = 0; i < sqr.length; i++){
		if(colors[i]){
			sqr[i].style.background = colors[i]; 
		} else {
			sqr[i].style.display = "none"; 
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected"); 
	hardBtn.classList.add("selected");
	numSquares = 6;  
	colors = generateColors(numSquares); 
	pickColor = pickedColor();
	display.textContent = pickColor; 
	for(var i = 0; i < sqr.length; i++){
			sqr[i].style.background = colors[i]; 
			sqr[i].style.display = "block"; 
		}
});

resetButt.addEventListener("click", function(){
	// first need to generate a new colors
	colors = generateColors(numSquares); 
	// pick random color
	pickColor = pickedColor(); 
	// change the value in h1
	display.textContent = pickColor; 
	// for the end change all squares
	for(var i = 0; i < sqr.length; i++) {
		sqr[i].style.background = colors[i]; 
	}
	title.style.background = "steelblue";
	message.textContent = ""; 
	this.textContent = "New Game";
});

for(var i = 0; i < sqr.length; i++){
	sqr[i].style.background = colors[i]; 

	// add event to each element

	sqr[i].addEventListener("click", function(){
		// grab the color value
		var choose = this.style.background;  
		// compare if the grab value is equal to pickColor
		if(choose === pickColor) {
			message.textContent = "Correct!"; 
			changeColor(choose); 
			title.style.background = choose;
			resetButt.textContent = "Play Again!";  
		} else {
			message.textContent = "Try Again!";
			this.style.background = "#232323";   
		}
	});

}

function changeColor(color) {
	// loop through all squares
	for(var i = 0; i < sqr.length; i++){
		// now change all color to be one
		sqr[i].style.background = color
	}
}

function pickedColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}


function generateColors(num) {
	// create a empty array
	var arr = []
	// loop through the number of combination, and push the randomColors in the array
	for(var i = 0; i < num; i++){
		arr.push(randomColors()); 
	}
	// and return an array
	return arr; 
}


function randomColors() {
	// first to set random color for red
	var r = Math.floor(Math.random() * 256); 
	// second to set random color for green
	var g = Math.floor(Math.random() * 256); 
	// third is to set random color for blue
	var b = Math.floor(Math.random() * 256); 
	return "rgb(" + r + ", " + g + ", " + b + ")"; 

}