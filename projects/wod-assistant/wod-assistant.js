var body = document.getElementById("body");
var currentExerciseHtml = document.getElementById("current-exercise");
var nextExerciseHtml = document.getElementById("next-exercise");
var roundsHtml = document.getElementById("rounds");
var timeHtml = document.getElementById("time");

var exerciseIndex = 0;
var roundsCompleted = 0;

var workoutStarted = false;
var timer;

var workout = {
	name: "Akakabuto",
	type: "AMRAP",
	timecap: 15,
	exercises: [
		{exercise: "Over the bar burpees", reps: 5},
		{exercise: "Thrusters", reps: 10},
		{exercise: "Wallballs", reps: 5},
		{exercise: "KB swings", reps: 15}
	]
}

window.onload = function() {
	body.addEventListener("click", buttonClicked);
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        buttonClicked();
    }
}

function buttonClicked() {
	if(workoutStarted == false) {
		initializeTimer();
		workoutStarted = true;
	}
	displayNextExercise();
}

function initializeTimer() {
	var workoutMinutes = 60 * workout.timecap;
	timer = workoutMinutes;
	startTimer();
	roundsHtml.innerHTML = roundsCompleted;
}

function displayNextExercise() {
	var nextExercise = workout.exercises[exerciseIndex]
	var displayCurrent = nextExercise.reps + " " + nextExercise.exercise;
	currentExerciseHtml.innerHTML = displayCurrent;
	updateExerciseIndex();
	updateNextExercise();
}

function updateExerciseIndex() {
	exerciseIndex++;
	if(exerciseIndex >= workout.exercises.length) {
		completeRound();
	}
}

function completeRound() {
	exerciseIndex = 0;
	roundsCompleted += 1;
	roundsHtml.innerHTML = roundsCompleted;
}

function updateNextExercise() {
	var nextExercise = workout.exercises[exerciseIndex]
	var displayNext = nextExercise.reps + " " + nextExercise.exercise;
	nextExerciseHtml.innerHTML = displayNext;
}

function startTimer() {
	updateTimer();
    setInterval(updateTimer, 1000);
}

function updateTimer() {
	var minutes, seconds;
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeHtml.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        timer = duration;
    }
}