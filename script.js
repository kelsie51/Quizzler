var questions = ["Are you a new student?", "Look a airplane?"] ;
var question1Options = ["Yes", "No"];
var question2Options = ["I saw a airplane", "That's a pretty cool airplane"];
var rightWrong = ["Great job!", "Incorrect"];


document.querySelector("#btnQuizStart").addEventListener("click", function () {

    question1.classList.remove('hide');
    startquiz.classList.add('hide');  
    
    document.getElementsByName('question1TextName')[0].placeholder = questions[0];
    document.getElementById('btnQuestion1Option1').innerText = question1Options[0];
    document.getElementById('btnQuestion1Option2').innerText = question1Options[1];
});
//TODO: research querySelector
document.querySelector("#btnQuestion1Option1").addEventListener("click", function () {
    document.getElementsByName('question1TextName')[0].placeholder = rightWrong[0]; //Placeholder puts "example" text in an object like "mm/dd/yyyy" in a birthdate textbox
    question1Options.classList.add('hide'); 
});
document.querySelector("#btnQuestion1Option2").addEventListener("click", function () {
    document.getElementsByName('question1TextName')[0].placeholder = rightWrong[1]; //Placeholder puts "example" text in an object like "mm/dd/yyyy" in a birthdate textbox
    
});


function showHide(show, hide){
    show.classList.remove('hide');
    hide.classList.add('hide'); 
}




   