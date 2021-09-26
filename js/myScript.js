
$(document).ready(function(){
    
 	var toggles = document.querySelectorAll(".hamburger-menu");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
}

  var toggles = document.querySelectorAll(".hamburger-menu-blue2");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
}

  var toggles = document.querySelectorAll(".mobile-hamburger-menu");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
}

function toggleHandler(toggle) {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      // $('.menu').toggle();
      $(".menu").css('right', '-100%');
      this.classList.remove("is-active");
      $(".open").removeClass("oppenned");
    } else {
      this.classList.add("is-active");
      $(".menu").css('right', '0');
      $(".open").addClass("oppenned");
    }
  });
}



    // fullpage_api.setResponsive(true);

$( ".plus-icon" ).click(function() {
$( ".plus-icon" ).hide();
 $(".minus-icon").show();
 $(".toggle-div").slideToggle();
 // $(".menulist").toggle( "slide" );
});

$( ".minus-icon" ).click(function() {
$(".toggle-div").slideToggle();
$(".minus-icon").hide();
 $(".plus-icon").show();
});

////////////////////////////////////////////////

  $('.team-member-inner').hide();  
  $('.img-p9-s8').mouseenter( function () {
    $(this).find('.team-member-inner').slideToggle(200);
    $(this).find(".member-photo").css({
        "filter": "grayscale(0%)",
        "-webkit-filter": "grayscale(0%)"
    });
  });  

  $('.img-p9-s8').mouseleave( function () {
      $(this).find('.team-member-inner').slideToggle(200);
    $(this).find(".member-photo").css({
        "filter": "grayscale(100%)",
        "-webkit-filter": "grayscale(100%)"
    });

  });



///////

$('.team-member-inner').click(function () {
  $('.team-slider').toggle( "slide", { direction: "right" });
});

$('.close-button').click(function () {
  $('.team-slider').toggle( "slide", { direction: "right" });
});


//////





});