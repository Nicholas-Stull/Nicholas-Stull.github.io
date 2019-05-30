src = "https://cdn.jsdelivr.net/npm/amplitudejs@{{4.1.0}}/dist/amplitude.js"
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// This handles the slider status

var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
var slider = document.getElementsByClassName('slider-parent')[0];
var sliderBg = document.getElementsByClassName('slider-bg')[0];

var cont = document.getElementsByClassName("container")[0];

handleSlider = function(){

	if(slider.classList.contains("active")){
		slider.classList.remove("active");
		sliderBg.classList.remove("active");

		cont.classList.remove("active"); // This line is just for demo 2

	}else{
		slider.classList.add("active");
		sliderBg.classList.add("active");

		cont.classList.add("active"); // This line is just for demo 2
	}

}

sliderTrigger.addEventListener( "click" , handleSlider);

sliderBg.addEventListener("click", handleSlider);

document.addEventListener('touchstart', handleTouchStart, false);        

document.addEventListener('touchmove', handleTouchMove, false);

