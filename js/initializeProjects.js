var container = document.getElementById("projects");
var projects = document.querySelectorAll(".project");

function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
    	el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
    	rect.top >= 0 &&
    	rect.left >= 0 &&
    	rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    	rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    	);
}

function updateProjects() {
	for (var i = 0; i < projects.length; i++) {
		var currentProject = projects[i];
		var currentProjectTitle = projects[i].children[0].children[0].children[0];
		var currentProjectImage = projects[i].children[0].children[0].children[1];

		if(isElementInViewport(currentProjectTitle)) {
			currentProject.style.background = "transparent";
			currentProjectTitle.style.opacity = 1;
			currentProjectImage.style.filter = "grayscale(20%) brightness(100%)";
		}
		else {
			currentProject.style.background = "rgba(18,18,18,0.7)";
			currentProjectTitle.style.opacity = 0;
			currentProjectImage.style.filter = "grayscale(90%) brightness(50%)";
		}
	};
}

for (var i = 0; i < projects.length; i++) (function(i){ 
	var project = projects[i];
	project.style["-webkit-animation"] = "fadeIn 1s"; /* Safari, Chrome and Opera > 12.1 */
	project.style["-moz-animation"] = "fadeIn 1s"; /* Firefox < 16 */
	project.style["-ms-animation"] = "fadeIn 1s"; /* Internet Explorer */
	project.style["-o-animation"] = "fadeIn 1s"; /* Opera < 12.1 */
	project.style.animation = "fadeIn 1s";

	project.style.opacity = "0";
	project.style.opacity = "1 \9"; /*just in case ie*/

	project.style["-webkit-animation-fill-mode"] = "forwards";
	project.style["-moz-animation-fill-mode"] = "forwards";
	project.style["animation-fill-mode"] = "forwards";

	project.style["-webkit-animation-delay"] = 0.1 * i + "s";
	project.style["-moz-animation-delay"] = 0.1 * i + "s";
	project.style["animation-delay"] = 0.1 * i + "s";

	project.onclick = function() {
		project.classList.toggle("flip");
	}
})(i);

/*
window.onload = updateProjects;
window.onscroll = updateProjects;
container.onscroll = updateProjects;
*/