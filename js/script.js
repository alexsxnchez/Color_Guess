var colors = ["Blue", "Red", "Green", "Yellow", "Purple", "Pink", "Orange", "Turquoise"];
function startGame(){
    subTop.style.display = "flex";
    stop.style.display = "block";
    title.style.display = "none";
    setInterval(timer, 1000);
    reset();
}
function stopGame(){
    location.reload();
}
// var checkmark = document.getElementById("checkmark");
// var wrong = document.getElementById("wrong");
var correct = document.getElementById("points");
var subTop = document.getElementById("subTop");
var title = document.getElementById("title");
var stop = document.getElementById("stop");
var correctInt = 0

function reset(){
    //To slate either or as color or word
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
    var correctAnswer = colors[random];
    //Change the word to correct color
    color1.innerHTML = correctAnswer;
    //Change the color to the corect color
    color2.style.color = correctAnswer;
    //If statemens to change the residing words and color diffrent from the answer
    if(random+1==8){
        color2.innerHTML = colors[random-3];
    }else{
        color2.innerHTML = colors[random+1];
    }
    if(random-1==-1){
        color1.style.color = colors[random+3];
    }else{
        color1.style.color = colors[random-1];
    }

    color1.style.display = "block";
    color2.style.display = "block";

    //Creates a click function that checks if color name matches answer
    addClick("Blue", correctAnswer);
    addClick("Red", correctAnswer);
    addClick("Green", correctAnswer);
    addClick("Yellow", correctAnswer);
    addClick("Purple", correctAnswer);
    addClick("Pink", correctAnswer);
    addClick("Orange", correctAnswer);
    addClick("Turquoise", correctAnswer);
}
function addClick(color, correctAnswer){
    var colorSpan = document.getElementById(color);
    let onclick = "checkColor('".concat(color,"','",correctAnswer,"')");
    colorSpan.setAttribute("onclick", onclick);
}

function checkColor(color, correctAnswer){
    if(color===correctAnswer){
        correctInt++;
    //     checkmark.classList.add("fadeAway");
    // }else{
    //     wrong.classList.add("fadeAway");
    }
    // setTimeout(function(){
    //     checkmark.classList.remove("fadeAway");
    //     wrong.classList.remove("fadeAway");
    // },500);
    reset();
    correct.innerHTML = correctInt;
}

var countdown = 30;
function timer(){
    document.getElementById("time").innerHTML = countdown;
    if(countdown==0){
        clearInterval(timer);
        alert("Game Over. Score: " + correctInt);
        location.reload();
    }
    countdown--;
}