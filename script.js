var questions = ["Are you a new student?", "Look a airplane?"] ;
var question1Options = ["Yes", "No"];
var question2Options = ["I saw a airplane", "That's a pretty cool airplane", "Am I a airplane?"];
var rightWrong = ["Great job!", "Incorrect answer. Time is speeding up!!!"];

var elem = document.getElementById("myBar");
var barIncrement = 1;

function showHide(show, hide){
    show.classList.remove('hide');
    hide.classList.add('hide'); 
}


//TODO: research querySelector
document.querySelector("#btnQuestion1Option1").addEventListener("click", function () {
    //correct answer
        showHide(question2, question1);         
});
document.querySelector("#btnQuestion1Option2").addEventListener("click", function () {
    //incorrect answer
      showHide(question2, question1);
      //speed up progress bar if answer is incorrect
      barIncrement = 3;     
});
document.querySelector("#btnQuizStart").addEventListener("click", function (){    
    showHide(question1, startquiz); 
    var width = 0;
    var id =setInterval(frame, 1000);
    function frame(){
        if (width == 100){
            clearInterval(id);
        }else{
            width+=barIncrement;
            elem.style.width = width + '%';
        }
    }    
});


//Load text for Question 1
document.getElementsByName('question1TextName')[0].placeholder = questions[0];
document.getElementById('btnQuestion1Option1').innerText = question1Options[0];
document.getElementById('btnQuestion1Option2').innerText = question1Options[1];

//Load text for Question 2
document.getElementsByName('question2TextName')[0].placeholder = questions[1];
document.getElementById('btnQuestion2Option1').innerText = question2Options[0];
document.getElementById('btnQuestion2Option2').innerText = question2Options[1];
document.getElementById('btnQuestion2Option3').innerText = question2Options[2];







   