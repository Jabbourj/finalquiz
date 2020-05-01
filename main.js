
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	var correct = 0;


	if (question1 === "mkdir") {
		correct++;
}
	if (question2 === "cd") {
		correct++;
}
	if (question3 === "JavaScript strings are used for storing and manipulating text") {
		correct++;
	}
	if (question4 === "ls") {
		correct++;
}
	if (question5 === "The body section") {
		correct++;
}
	if (question6 === "if (i === 5)") {
		correct++;
	}
	if (question7 === "control") {
		correct++;
}
	if (question8 === "rake:dbmigrate") {
		correct++;
}
	if (question9 === "var color = [ red, blue, green]") {
		correct++;
	}
	if (question10 === "return") {
		correct++;
	}

	var pictures = ["img/perfect.gif","img/win.gif", "img/meh.gif", "img/lose.gif"];
	var messages = ["Perfect!","Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct < 4) {
		score = 3;
	}

	if (correct >= 4 && correct < 6) {
		score = 2;
	}

	if (correct >= 6 && correct < 10) {
		score = 1;
	}

	if (correct === 10) {
		score = 0;
	}

	console.log(score);

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
