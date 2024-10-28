var colors = [
    {Color: "Blue", Hex: "#0C89FF"}, 
    {Color: "Red", Hex: "#FF1616"}, 
    {Color: "Green", Hex: "#75FF00"}, 
    {Color: "Yellow", Hex: "#FFD000"}, 
    {Color: "Purple", Hex: "#7F00FF"}, 
    {Color: "Pink", Hex: "#FF31DB"}, 
    {Color: "Orange", Hex: "#FF6200"}, 
    {Color: "Turquoise", Hex: "#0FD"}
];

//If button is clicked this function starts the clock and whole game
function startGame(){
    colorBoard.style.display = "flex";
    stop.style.display = "block";
    title.style.display = "none";
    setInterval(timer, 1000);
    reset();
}
//If button is clicked this function ends the game
function stopGame(){
    location.reload();
}
var correct = document.getElementById("points");
var colorBoard = document.getElementById("color__board");
var title = document.getElementById("title");
var stop = document.getElementById("stop");
var correctInt = 0

function reset(){
    //If statment that changes either or as color or word...
    var random1 = Math.floor(Math.random() * 2);
    if(random1==0){
        var color1 = document.getElementById("color1");
        var color2 = document.getElementById("color2");
    }else{
        var color2 = document.getElementById("color1");
        var color1 = document.getElementById("color2");
    }

    document.getElementById("start").style.display = "none";
    //Choose a color from the index at random
    var random = Math.floor(Math.random() * 8);
    console.log(random);
    var correctAnswer = colors[random];
    //Change the word to correct color
    color1.innerHTML = correctAnswer.Color;
    //Change the color to the corect color
    color2.style.color = correctAnswer.Hex;
    //If statemens to change the residing words and color diffrent from the answer
    if(random+1==8){
        color2.innerHTML = colors[random-4].Color;
    }else{
        color2.innerHTML = colors[random+1].Color;
    }
    if(random-1==-1){
        color1.style.color = colors[random+4].Hex;
    }else{
        color1.style.color = colors[random-1].Hex;
    }

    color1.style.display = "block";
    color2.style.display = "block";

    //Creates a click function that checks if color name matches answer
    addClick("Blue", correctAnswer.Color);
    addClick("Red", correctAnswer.Color);
    addClick("Green", correctAnswer.Color);
    addClick("Yellow", correctAnswer.Color);
    addClick("Purple", correctAnswer.Color);
    addClick("Pink", correctAnswer.Color);
    addClick("Orange", correctAnswer.Color);
    addClick("Turquoise", correctAnswer.Color);
}
function addClick(color, correctAnswer){
    var colorSpan = document.getElementById(color);
    let onclick = "checkColor('".concat(color,"','",correctAnswer,"')");
    colorSpan.setAttribute("onclick", onclick);
}

function checkColor(color, correctAnswer){
    if(color===correctAnswer){
        correctInt++;
    }
    reset();
    correct.innerHTML = correctInt;
}

var checkChangeColor = document.querySelector(".colorText");
if (checkChangeColor.style.color = "blue"){
    checkChangeColor.style.color = "#0C89FF";
}

var countdown = 30;
function timer(){
    document.getElementById("time").innerHTML = countdown;
    if(countdown==0){
        clearInterval(timer);
        document.getElementById("counted__score_container").style.display = "block";
        document.getElementById("counted__score").innerHTML = "Game Over. Your final score is: " + correctInt;
        document.getElementById("time").style.display = "none";
        if (correctInt <= 5) {
            document.getElementById("counted__score_reaction").innerHTML = "No worries. You can always try again!";
        } else if (correctInt > 5) {
            document.getElementById("counted__score_reaction").innerHTML = "Wow, Great job! Can you beat your score?";
        }
    }
    countdown--;
}