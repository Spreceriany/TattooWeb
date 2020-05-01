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

!function(window){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

          a.removeRule(0);
          res = c;
        }
        return res;
      }
    , addEventListener = function(evt, fn){
        window.addEventListener
          ? this.addEventListener(evt, fn, false)
          : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
    ;

  function loadImage (el, fn) {
    var img = new Image()
      , src = el.getAttribute('data-src');
    img.onload = function() {
      if (!! el.parent)
        el.parent.replaceChild(img, el)
      else
        el.src = src;

      fn? fn() : null;
    }
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

    var images = new Array()
      , query = $q('img.lazy')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          };
        }
      ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);