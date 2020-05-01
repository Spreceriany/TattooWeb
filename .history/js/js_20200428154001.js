$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

const netflix_open_btn = document.querySelector(".netflix-open-btn");
const netflix_close_btn = document.querySelector(".netflix-close-btn");
const netflix_nav = document.querySelectorAll(".netflix-nav");
const netflix_btns = document.querySelectorAll(".netflix-list a");

netflix_open_btn.addEventListener("click", () => {
  netflix_nav.forEach(nav_el => {
    nav_el.classList.add("visible");
  });
});

netflix_close_btn.addEventListener("click", () => {
  netflix_nav.forEach(nav_el => {
    nav_el.classList.remove("visible");
  });
});

var length = netflix_btns.length;
for (let x = 0; x < length; x++) {
  netflix_btns[x].addEventListener("click", () => {
    netflix_nav.forEach(nav_el => {
      nav_el.classList.remove("visible");
    });
  });
}

/////////////////// GALERIA //////////////////////////////
// Material Select Initialization

const backToTopButton = document.querySelector("#back-to-top-btn");





$(function() {
  $(".strip").mouseover(function() {
    var curImg = $(this).attr("data-image");

    $(".banner-img").css("background-image", "url(" + curImg + ")");
  });

  $(".strip").mouseout(function() {
    $(".banner-img img").css("opacity", ".8");
    $(".banner-img img").attr("src", image); // SET DEFAULT IMAGE WHEN MOUSE OUT
  });
});

$(window).load(function(){
  var $container = $('.portfolioContainer');
  $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });

  $('.portfolioFilter a').click(function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
       });
       return false;
  }); 
});

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});