// Purpose of this game: Create a quiz
// set timer so user has a time in which to answer questions
// have a start button
// display questions and answers
// when timer is up, game is done
// show correct and incorrect numbers
// restart game without having to refresh page 


var startBtn = document.getElementById('startBtn');


function submitAnswers (){
     var total= 8;
     var score=0; 

     // user input
     var q1 = document.forms["quizForm"]["q1"].value; 
     var q2 = document.forms["quizForm"]["q2"].value; 
     var q3 = document.forms["quizForm"]["q3"].value; 
     var q4 = document.forms["quizForm"]["q4"].value; 
     var q5 = document.forms["quizForm"]["q5"].value; 
     var q6 = document.forms["quizForm"]["q6"].value; 
     var q7 = document.forms["quizForm"]["q7"].value;
     var q8 = document.forms["quizForm"]["q8"].value;

     // Validation
    for (i=1; i <= total; i++) {
        if(eval('q'+i) == null || eval ('q'+i) == ' ') {
            alert ('You missed question ' + i); 
            return false; 
        }
    }

     // Set Answers
     var answers = ["b","c","b","a","b","a","a","d"]; 

     // Answerss
     for(i = 1; i <= total;i++) {
         if(eval('q' + i) == answers[i-1]) {
             score ++;
         }
     }

     
     // Results
     var results = document.getElementById('results');
     results.innerHTML = '<h4> You scored <span>' + score + '</span> out of <span>' + total + '</span></h4>';  
     //alert('You scored'+ score + 'out of' + total); 

     return false; 
     } 


$(document).ready(function(){
    setTimeout(function(){
        alert("You have 60 seconds to complete the quiz!");
     }, 1000); 
})


// set timer 
var counter = 61;
 timer = setInterval(time, 6100);


 function time() {
 counter --;
 $('#countDown').html(counter);
 if (counter <= 0) {
 results();}
 if (time === 0) {
    clearInterval(timer);
   

 }} 
