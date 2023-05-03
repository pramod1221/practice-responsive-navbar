$(document).ready(function(){
  $(".toggle-button").on('click', function(){
    $(".navbar-links").toggleClass("navbar--active");
    $(this).toggleClass("toggle-button--close");    
  });

  $(".navbar-links a").on('click',function(){
    if (!$(this).hasClass("external-link")) {
      $(".toggle-button").trigger('click');
    }
  });

  // Toggle position of navbar outside of window when scrolling
  // let prevScrollPos = $(window).scrollTop();
  // $(window).scroll(function () {
  //   let currentScrollPos = $(window).scrollTop();
  //   if (prevScrollPos > currentScrollPos) {
  //     $(".header").removeClass("header--out");
  //   } else {
  //     $(".header").addClass("header--out");
  //   }
  //   prevScrollPos = currentScrollPos;
  // });
});