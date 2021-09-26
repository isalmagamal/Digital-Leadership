
$(document).ready(function(){
    
 	var toggles = document.querySelectorAll(".hamburger-menu");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
}

function toggleHandler(toggle) {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      this.classList.remove("is-active");
      $(".open").removeClass("oppenned");
    } else {
      this.classList.add("is-active");
      $(".open").addClass("oppenned");
    }
  });
}
//  $( "#close-hamburger-menu" ).hide();
// $( ".menulist" ).hide();
// $( "#hamburger-icon" ).click(function() {
// 	$(".menu").css('height', '100%');
// 	$(".menulist").css('height', '100%');
// 	// $(".menulist").css('background-color', 'red');
// 	$(".menulist").show();
// 	// $(".menulist").toggle( "slide" );
// 	$("#close-hamburger-menu" ).show();
// 	 $( "#hamburger-icon" ).hide();
// });

// $( "#close-hamburger-menu" ).click(function() {
// $( ".menulist" ).hide()
// 	$(".menu").css('height', 'unset');
// 	$(".menulist").css('height', 'unset');
// $( "#close-hamburger-menu" ).hide();
// $( "#hamburger-icon" ).show();
// });
    


    
});