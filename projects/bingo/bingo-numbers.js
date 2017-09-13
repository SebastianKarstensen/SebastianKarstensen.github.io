var currentNumber = document.getElementById("current-number");
var a = new Array(90);
for (var i = 0; i < a.length; ++i) { a[i] = false; }
var numbers;

window.onload = function() {
	numbers = document.getElementsByClassName('number');
	
	for(var j = 0; j < numbers.length; j++) {
		numbers[j].onclick = function() {
			colorNumber(this,j);
		}
		numbers[j].addEventListener('contextmenu', function(ev) {
	    	ev.preventDefault();
	    	decolorNumber(this,j);
	    	return false;
		}, false);
	}
}

function colorNumber(element,number) {
	element.style.background = "#ff00a1";
	element.style.color = "white";
	currentNumber.innerHTML = element.innerHTML;
	a[number] = true;
}

function decolorNumber(element,number) {
	element.style.color = "#2f2f2f";
	element.style.background = "#ff9900";
	a[number] = false;
}