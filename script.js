var questions = ["Are you a new student?", "Look a airplane?"] ;
var question1Options = ["Yes", "No"];
var question2Options = ["I saw a airplane", "That's a pretty cool airplane", "Am I a airplane?"];
var rightWrong = ["Great job!", "Incorrect"];

//Load text for Question 1
document.getElementsByName('question1TextName')[0].placeholder = questions[0];
document.getElementById('btnQuestion1Option1').innerText = question1Options[0];
document.getElementById('btnQuestion1Option2').innerText = question1Options[1];

//Load text for Question 2
document.getElementsByName('question2TextName')[0].placeholder = questions[1];
document.getElementById('btnQuestion2Option1').innerText = question2Options[0];
document.getElementById('btnQuestion2Option2').innerText = question2Options[1];
document.getElementById('btnQuestion2Option3').innerText = question2Options[2];


document.querySelector("#btnQuizStart").addEventListener("click", function () {

   // question1.classList.remove('hide');
    //startquiz.classList.add('hide'); 
    showHide(question1, startquiz); 
    
    
});
//TODO: research querySelector
document.querySelector("#btnQuestion1Option1").addEventListener("click", function () {
    document.getElementsByName('question1TextName')[0].placeholder = rightWrong[0]; //Placeholder puts "example" text in an object like "mm/dd/yyyy" in a birthdate textbox
    showHide(question2, question1); 
});
document.querySelector("#btnQuestion1Option2").addEventListener("click", function () {
    document.getElementsByName('question1TextName')[0].placeholder = rightWrong[1]; //Placeholder puts "example" text in an object like "mm/dd/yyyy" in a birthdate textbox
    showHide(question2, question1);
});



function showHide(show, hide){
    show.classList.remove('hide');
    hide.classList.add('hide'); 
}




   