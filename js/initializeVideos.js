var videos = document.querySelectorAll(".video");

for (var i = 0; i < videos.length; i++) (function(i){ 
	var video = videos[i];
	video.style["-webkit-animation"] = "fadeIn 1s"; /* Safari, Chrome and Opera > 12.1 */
	video.style["-moz-animation"] = "fadeIn 1s"; /* Firefox < 16 */
	video.style["-ms-animation"] = "fadeIn 1s"; /* Internet Explorer */
	video.style["-o-animation"] = "fadeIn 1s"; /* Opera < 12.1 */
	video.style.animation = "fadeIn 1s";

	video.style.opacity = "0";
	video.style.opacity = "1 \9"; /*just in case ie*/

	video.style["-webkit-animation-fill-mode"] = "forwards";
	video.style["-moz-animation-fill-mode"] = "forwards";
	video.style["animation-fill-mode"] = "forwards";

	video.style["-webkit-animation-delay"] = 0.1 * i + "s";
	video.style["-moz-animation-delay"] = 0.1 * i + "s";
	video.style["animation-delay"] = 0.1 * i + "s";

	video.onclick = function() {
		video.classList.toggle("flip");
	}
})(i);