
//============================================================
//Global Variables
var correct = 0;
var delay = 0;

//============================================================
//Functions

function check(){

var q1 = document.triviaQuiz.q1.value;
var q2 = document.triviaQuiz.q2.value;
var q3 = document.triviaQuiz.q3.value;
var q4 = document.triviaQuiz.q4.value;


	if (q1 == "Monrovia") {
		correct++; 
}
	if (q2 == "9.5 million") {
		correct++;
}
	if (q3 == "Iran") {
		correct++;
}
	if (q4 == "Tanzania") {
		correct++;
}

countCorrectAnswers();
//("#timeLeft").append("<h2>Time's Up!</h2>");
}


function countCorrectAnswers(){


	if (correct == "4") {
		alert("You are Awesome and got all questions correct!")
	}

	if (correct == "3") {
		alert("You did ok, only missed one.")
	}

	if (correct == "2") {
		alert("You did ehh, missed two.")
	}

	if (correct =="1") {
		alert("You didn't do well.  You missed 3!")
	}

	if (correct == "0") {
		alert("You did horrible, go back to 8th grade!")
	}	
	
	stop()
}

function stop() {

	clearInterval(delay);
	console.log(delay);
}


$(document).ready(function() {
	
	var number = 15;

	function countdown() {
		
		
		if (number < 0) {


		console.log("you have " + correct + " correct");
		stop();
		check();
		console.log("you have " + correct + " correct");

		}
		else { $('#box').html("You have " + number + " seconds left.");
		number --;
		delay = setTimeout(countdown, 1000);
		}


	}

countdown();

});