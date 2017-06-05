
//============================================================
//Global Variables
var correct = 0;






//============================================================
//Functions

function check(){

var q1 = document.triviaQuiz.q1.value;
var q2 = document.triviaQuiz.q2.value;
var q3 = document.triviaQuiz.q3.value;
var q4 = document.triviaQuiz.q4.value;



	if (q1 == "Monrovia") {
		correct++;
		console.log(q1) 
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
console.log(correct);
countCorrectAnswers();
//document.getElementById("afterSubmit").style.visibility = "visible";
document.getElementByd("numberCorrect").innerHTML =  "You got" + correct +" correct!";	
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

}



//============================================================
//Main Process



