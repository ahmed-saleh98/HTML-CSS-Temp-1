$(document).ready(() => {
  // Start Header
  // toogle active class to open and close menu
  $("nav .links").on("click", ".icon", (e) => {
    $("nav .links ul").slideToggle(300);
    $("nav .links ").toggleClass("active");
  });

  let menu = document.querySelector("nav .links");
  $(menu).on("click", (e) => {
    e.stopPropagation();
  });
  // if click is'nt on the menu close it
  $(document).on("click", (e) => {
    if (e.target !== menu) {
      $("nav .links ").removeClass("active");
      $("nav .links ul").slideUp(300);
    }
  });
  // show and hide nav on scroll
  let prevScrollpos = window.pageYOffset;
  $(window).on("scroll", () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $("nav").css({
        top: "0px",
      });
    } else {
      $("nav").css({
        top: "-70px",
      });
    }
    prevScrollpos = currentScrollPos;
  });
  // End header
});
