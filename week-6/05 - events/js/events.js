$(document).ready(init);
var title = $('h1');

function init() {
	$("h1").dblclick(doubleClick);
	$(document).keypress(keyPressed)
}

function doubleClick() {
	console.log("Double click!");
}


function keyPressed(e) {
	console.log("Key pressed! and the code is: " + e.keyCode);
	if (e.keyCode === 13 ) {
		console.log(" I'm In ");
		title.css("color", "red");
	} else {
		console.log("What the fuck?");
	}
}