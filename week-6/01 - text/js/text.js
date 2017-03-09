// Document Object Model
// jQuery = $ 
/* $(document).on('ready', function() {
  console.log("Hola Mundo");
});*/

//$(".lorem").click(changeText);
//document.getElementsByClassName("lorem");
//$("#title");
//document.getElementById("title");
$(document).ready(init);

console.log(this);

function init() {
  console.log(this);
  //$(".lorem").click(changeText);
  $(".lorem").on('click', onClickLorem);
}

function onClickLorem() {
  $(".lorem").text("This is the new shit");
}

function changeText() {
  //$("#title").text("This is my new title");
  console.log($(".lorem").text());
  $(".lorem").text("This is my new title");
  console.log($(".lorem").text());	
}

/*$(document).ready(init);

function init() {
	$("p").click(changeText);
}

function changeText() {
  //$(this).text("This is the new text for Paragraph!");
  $("h1").text("This is the new title!");
  console.log($("h1").text());
}*/





























