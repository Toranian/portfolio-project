window.onload = function () {
	var elements = document.getElementsByClassName("animate");

	// var navbar = document.querySelector("#navbar");


	for (var i = 0; i < elements.length; i++) {
		element = elements[i];
		element.classList.remove("fade");
		element.classList.add("show");

		if (window.innerWidth <= 1000) {
			toggleNav();
		}
	}
}

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

window.onscroll = function () {
	var scrollbar = document.getElementById("scrollbar");

	var height = document.documentElement.scrollTop;
	if (height > 0) {
		scrollbar.style.height = scale(height, 0, window.innerHeight, 0, 100) + "%";

	}
}


function fadeOut() {
	var elements = document.getElementsByClassName("animate");

	for (var i = 0; i < elements.length; i++) {
		element = elements[i];
		element.classList.remove("show");
		element.classList.add("fade");
	}
}

function toggleNav() {
	var navbar = document.querySelector("#navbar");
	var menu = document.querySelector("#menu");
	
	menu.classList.toggle("change");
	navbar.classList.toggle("hide");
}

function toggleBackground() {
	var background = document.querySelector("#background");
	var toggle = document.querySelector("#bg-toggle");
	background.classList.toggle("hide");

	// background.innerHTML = "cbt";

	if (toggle.textContent == "Disable Background") {
		toggle.textContent = "Enable Background";
	} else {
		toggle.textContent = "Disable Background";
	}

}
window.onresize = function () {
	var background = document.querySelector("#navbar");
	if (window.innerWidth <= 1000 || !background.classList.contains("hide")) {
		toggleNav();
		// background.classList.add("hide");

	}
}