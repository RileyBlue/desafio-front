$(document).ready(init);

function init() {
  $("h1").click(changeLink);
}

function changeLink() {
  // See the Attribute
  console.log($('a').attr("href"));

  // Modify
  //$("a").attr("href", "http://www.desafiolatam.com");
  //console.log($(this).attr("href"));

  // Remove Attr 
  $("a").removeAttr("href");
  console.log($("a").attr("href"));

}