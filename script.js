//TODO: make actual questions/answers
//TODO: final cleanup/distribute new CSS rules

var questions = ["Are you a new student?", "Look a airplane?","What does this go to?", "Where are the sun go?"] ;
var trueFalse = ["True", "False"];
var question2Options = ["I saw a airplane", "That's a pretty cool airplane", "Am I a airplane?"];
var question3Options = ["3.14","11","the end","nowhere"];
var rightWrong = ["Great job!", "Incorrect answer. Time is speeding up!!!"];

var elem = document.getElementById("myBar");
var barIncrement = 1;
var correctCount = 0;
var keepCounting = true;
const questionCount = 4;


function showHide(show, hide){
    show.classList.remove('hide');
    hide.classList.add('hide'); 
}

function localStorageFunction() {
  var userScore = correctCount;
  var retrievedScore = JSON.parse(localStorage.getItem("highScore"));
  
  if(localStorage.getItem("highScore") === null){
	var initializeStorage = { name: "", score: "0"};
	localStorage.setItem("highScore", JSON.stringify(initializeStorage));	  
  }  
	
   if(Number(userScore) > Number(retrievedScore.score)){
	var person = prompt("Enter your name to enter the hall of fame!");
	if (person != null) {	
		var bigWinner = { name: person, score: userScore};
		localStorage.setItem("highScore", JSON.stringify(bigWinner));
	}
	retrievedScore = JSON.parse(localStorage.getItem("highScore"));
	document.getElementById("message").innerHTML =  "Congratulations, " + retrievedScore.name + 
	"! You have beaten the high score. The new high score is " + retrievedScore.score + ".";
	} 
	else{  
		retrievedScore = JSON.parse(localStorage.getItem("highScore"));
		document.getElementById("message").innerHTML =  "You did not beat the high score. Your score was " + userScore + 
		". The high score is " + retrievedScore.score;
	} 
}

document.querySelector("#btnClearScore").addEventListener("click", function () {

	localStorage.clear();
	var initializeStorage = { name: "", score: "0"};
	localStorage.setItem("highScore", JSON.stringify(initializeStorage));
	document.getElementById('message').innerText = "Scores cleared";   
});
document.querySelector("#btnShowScore").addEventListener("click", function () {

	retrievedScore = JSON.parse(localStorage.getItem("highScore"));
	document.getElementById("message").innerHTML =  "High score name: " + retrievedScore.name + 
	"<br /> High Score: " + retrievedScore.score + ".";  
});

document.querySelector("#btnQuizStart").addEventListener("click", function (){ 
    
    showHide(question1, startquiz); 
    var width = 0;
    var id =setInterval(frame, 1000);
    function frame(){
        if (width >= 100){
            clearInterval(id);
            document.getElementById('message').innerText = "Time's up! Game over! Your score is " + 
            correctCount + " out of " + questionCount + ".";
        }
		else{
			if(keepCounting){
				width+=barIncrement;
				elem.style.width = width + '%';
				if(width >= 75 && width < 100)
				document.getElementById('message').innerText = "HURRY UP! Time is running out!";
			}
        }
    }    
});

//TODO: research querySelector
//Question 1 buttons
document.querySelector("#btnQuestion1Option1").addEventListener("click", function () {
    //correct answer
	showHide(question2, question1);  
	document.getElementById('message').innerText = rightWrong[0]; 
	correctCount++; 
             
});
document.querySelector("#btnQuestion1Option2").addEventListener("click", function () {
    //incorrect answer
	showHide(question2, question1);
	//speed up progress bar if answer is incorrect
	barIncrement = 3;    
	document.getElementById('message').innerText = rightWrong[1];   
});

//Question 2 buttons
document.querySelector("#btnQuestion2Option1").addEventListener("click", function () {
    //incorrect answerdocument.getElementById('message').innerText = rightWrong[0];  
	showHide(question3, question2);
	document.getElementById('message').innerText = rightWrong[1];  
	//speed up progress bar if answer is incorrect
	barIncrement = 6;    

});
document.querySelector("#btnQuestion2Option2").addEventListener("click", function () {
    //correct answer
	showHide(question3, question2);  
	document.getElementById('message').innerText = rightWrong[0]; 
	correctCount++;         
});
document.querySelector("#btnQuestion2Option3").addEventListener("click", function () {
    //correct answer
	showHide(question3, question2);  
	document.getElementById('message').innerText = rightWrong[0];  
	correctCount++;        
});

//Question 3 buttons
document.querySelector("#btnQuestion3Option1").addEventListener("click", function () {
    //correct answer
	showHide(question4, question3);  
	document.getElementById('message').innerText = rightWrong[0]; 
	correctCount++;           
});
document.querySelector("#btnQuestion3Option2").addEventListener("click", function () {
    //correct answer
    showHide(question4, question3);
    document.getElementById('message').innerText = rightWrong[0]; 
    correctCount++;  
});
document.querySelector("#btnQuestion3Option3").addEventListener("click", function () {
    //incorrect answer
    showHide(question4, question3);
    document.getElementById('message').innerText = rightWrong[1];  
    //speed up progress bar if answer is incorrect
    barIncrement = 12;     
});
document.querySelector("#btnQuestion3Option4").addEventListener("click", function () {
    //correct answer
    showHide(question4, question3);
    document.getElementById('message').innerText = rightWrong[0];  
    correctCount++; 
});
//Question 4 buttons
document.querySelector("#btnQuestion4Option1").addEventListener("click", function () {
    //correct answer
	keepCounting = false;
	correctCount++;	
	localStorageFunction();			    
});
document.querySelector("#btnQuestion4Option2").addEventListener("click", function () {

	//document.getElementById('message').innerText = rightWrong[1]; 
	localStorageFunction();
	keepCounting = false;	  
});

//Load text for Question 1
document.getElementsByName('question1TextName')[0].placeholder = questions[0];
document.getElementById('btnQuestion1Option1').innerText = trueFalse[0];
document.getElementById('btnQuestion1Option2').innerText = trueFalse[1];

//Load text for Question 2
document.getElementsByName('question2TextName')[0].placeholder = questions[1];
document.getElementById('btnQuestion2Option1').innerText = question2Options[0];
document.getElementById('btnQuestion2Option2').innerText = question2Options[1];
document.getElementById('btnQuestion2Option3').innerText = question2Options[2];

//Load text for Question 3
document.getElementsByName('question3TextName')[0].placeholder = questions[2];
document.getElementById('btnQuestion3Option1').innerText = question3Options[0];
document.getElementById('btnQuestion3Option2').innerText = question3Options[1];
document.getElementById('btnQuestion3Option3').innerText = question3Options[2];
document.getElementById('btnQuestion3Option4').innerText = question3Options[3];

//Load text for Question 4
document.getElementsByName('question4TextName')[0].placeholder = questions[3];
document.getElementById('btnQuestion4Option1').innerText = trueFalse[0];
document.getElementById('btnQuestion4Option2').innerText = trueFalse[1];







   