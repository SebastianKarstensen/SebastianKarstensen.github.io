var body = document.getElementById("body");
var currentExerciseHtml = document.getElementById("current-exercise");
var nextExerciseHtml = document.getElementById("next-exercise");
var roundsHtml = document.getElementById("rounds");
var timeHtml = document.getElementById("time");
var workoutSelectionHtml = document.getElementById("workout-selection");
var workoutListHtml = document.getElementById("workout-list");
var exercisesHtml = document.getElementById("exercises");

var exerciseIndex = 0;
var roundsCompleted = 0;

var workoutStarted = false;
var workoutLoaded = false;
var timer;
var intervalId;

var workout;

var cindy = {
	name: "Cindy",
	type: "AMRAP",
	timecap: 20,
	exercises: [
		{exercise: "Pull-ups", reps: 5},
		{exercise: "Push-ups", reps: 10},
		{exercise: "Air Squats", reps: 15}
	]
}

var danny = {
	name: "Danny",
	type: "AMRAP",
	timecap: 20,
	exercises: [
		{exercise: "Box jumps", reps: 30},
		{exercise: "Push Press (35/52.5 kg)", reps: 20},
		{exercise: "Pull-ups", reps: 30}
	]
}

var christina = {
	name: "Christina",
	type: "AMRAP",
	timecap: 20,
	exercises: [
		{exercise: "Pull-ups", reps: 9},
		{exercise: "Cleans", reps: 9},
		{exercise: "Kettlebell Swings", reps: 9},
		{exercise: "Toes-to-bar", reps: 9},
		{exercise: "Push Press", reps: 9},
		{exercise: "Burpees", reps: 9}
	]
}

var froningFavourite = {
	name: "Froning Favourite",
	type: "AMRAP",
	timecap: 7,
	exercises: [
		{exercise: "Front-squats (50/80 kg)", reps: 9},
		{exercise: "Burpees", reps: 7},
		{exercise: "Shoulder to Overhead", reps: 5}
	]
}

var open151 = {
	name: "Open 15.1",
	type: "AMRAP",
	timecap: 9,
	exercises: [
		{exercise: "Toes-to-bar (34/52.5 kg)", reps: 15},
		{exercise: "Deadlifts (34/52.5 kg)", reps: 10},
		{exercise: "Snatches (34/52.5 kg)", reps: 5}
	]
}

var mcGheee = {
	name: "McGhee",
	type: "AMRAP",
	timecap: 30,
	exercises: [
		{exercise: "Deadlifts (80/120 kg)", reps: 5},
		{exercise: "Push-ups", reps: 13},
		{exercise: "Box Jumps", reps: 9}
	]
}

var jenny = {
	name: "Jenny",
	type: "AMRAP",
	timecap: 30,
	exercises: [
		{exercise: "Overhead Squats (15/20 kg)", reps: 20},
		{exercise: "Back Squats (15/20 kg)", reps: 20},
		{exercise: "meter Run", reps: 400}
	]
}

var artie = {
	name: "Artie",
	type: "AMRAP",
	timecap: 20,
	exercises: [
		{exercise: "Pull-ups", reps: 5},
		{exercise: "Push-ups", reps: 10},
		{exercise: "Squats", reps: 15},
		{exercise: "Pull-ups", reps: 5},
		{exercise: "Thrusters (30/40 kg)", reps: 10}
	]
}

var bex = {
	name: "Bex",
	type: "AMRAP",
	timecap: 35,
	exercises: [
		{exercise: "Wall Balls", reps: 50},
		{exercise: "Box Jumps", reps: 40},
		{exercise: "Overhead Squats (50/65 kg)", reps: 30},
		{exercise: "Deadlifts (50/65 kg)", reps: 20},
		{exercise: "meter Run", reps: 800}
	]
}

var workoutList = [
	artie,
	bex,
	christina, 
	cindy, 
	danny, 
	froningFavourite, 
	jenny,
	mcGheee,
	open151
]

window.onload = function() {
	currentExerciseHtml.addEventListener("click", buttonClicked);
	initializeWorkoutList();

	var workouts = document.getElementsByClassName('workout');
    for(var i = 0; i < workouts.length; i++) {
    	(function(index) {
			workouts[index].onclick = function() {
	        	loadWorkout(index);
	        	removeWorkoutList();
	        }
    	})(i);
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        buttonClicked();
    }
}

function initializeWorkoutList() {
	for (var i = 0; i < workoutList.length; i++) {
		workoutListHtml.innerHTML += "<li class=" + "\"workout\"" + ">" + workoutList[i].name + " - " + workoutList[i].timecap + ":00</li>";
	}
}

function loadWorkout(chosenWorkout) {
	workoutLoaded = true;
	workout = workoutList[chosenWorkout];

	for (var i = 0; i < workout.exercises.length; i++) {
		var exercise = workout.exercises[i]
		exercisesHtml.innerHTML += "<li>" + exercise.reps + " " + exercise.exercise + "</li>";
	}

	initializeTimer();
	updateTimer();

	var displayNext = workout.exercises[0].reps + " " + workout.exercises[0].exercise;
	nextExerciseHtml.innerHTML = displayNext;
}

function removeWorkoutList() {
	workoutSelectionHtml.parentNode.removeChild(workoutSelectionHtml);
}

function buttonClicked() {
	if(workoutLoaded == true) {
		if(workoutStarted == false) {
			startTimer();
			workoutStarted = true;
		}
		displayNextExercise();
	}
}

function initializeTimer() {
	var workoutMinutes = 60 * workout.timecap;
	timer = workoutMinutes;
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
    intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
	var minutes, seconds;
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeHtml.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        clearInterval(intervalId);
    	workoutLoaded = false;
    }
}