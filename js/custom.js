//
  
// Template Name: Expoge - Multipurpose Business HTML Template
// Version 1.0
// Author: themetrading
// Email: themetrading@gmail.com
// Developed By: themetrading
// First Release: 25 June 2020
// Author URL: www.themetrading.com

//----------------------------------------------------------------

//  Cache jQuery Selector
//  Auto active class adding with navigation
//  dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
//  Search Bar Main Menu
//  Navbar Fixed to top
//  Put slider space for nav not in mini screen
//  Elements Animation
//  Fact Counter For Achivement Counting
//  Partners One
//  Team Slider
//  Service Slider
//  Testimonial One
//  Testimonial Two
//  History Timeline
//  Scroll Top
//  Focus input 
//  Show pass
//  Porfolio Filtering Click Events
//  Portfolio Masonary Gallery
//  filter items on button click
//  LightBox / Fancybox
//----------------------------------------------------------------

(function ($) {
    "use strict";


    var $body       = $("body"),
    $window       = $(window)

    $body.scrollspy({
      target: ".navbar-collapse",
      offset: 20

    });
    
///=====================================================================================
// 01.  factCounte
//======================================================================================
var $window   = $(window)
  // Fact Counter For Achivement Counting
  //--------------------------------------------
  function factCounter() {
    if($('.fact-counter').length){
      $('.fact-counter .count.animated').each(function() {
    
        var $t = $(this),
          n = $t.find(".count-num").attr("data-stop"),
          r = parseInt($t.find(".count-num").attr("data-speed"), 10);
          
        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function() {
              $t.find(".count-num").text(Math.floor(this.countNum));
            },
            complete: function() {
              $t.find(".count-num").text(this.countNum);
            }
          });
        }
        
        var size = $(this).children('.progress-bar').attr('aria-valuenow');
        $(this).children('.progress-bar').css('width', size+'%');
      });
    }
  }

  $window.on('scroll', function() {
    factCounter();
  });

  // Elements Animation
  //----------------------------------------------------------------------------------
  if($('.wow').length){
    var wow = new WOW(
      {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
  }



///=====================================================================================
// 02.  Testmonial
//======================================================================================
  var galleryThumbs = new Swiper('.gallery-thumbs', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '2',
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows : true,
  // },
  
  coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
    },
    
  });
  
  
var galleryTop = new Swiper('.swiper-container.testimonial', {
  speed: 400,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  direction: 'vertical',
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    type: 'bullets',
  },
  thumbs: {
    swiper: galleryThumbs
    }
  });




///=====================================================================================
// 03.  Scroll Top
//======================================================================================

  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 500) { 
      $('#myBtn').fadeIn(); 
    } else { 
      $('#myBtn').fadeOut(); 
    } 
  }); 
  $('#myBtn').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 1000); 
    return false; 
  });




//=====================================================================================
// 04.  Active
//======================================================================================
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
  });




//=====================================================================================
// 05.  Smoothscroll
//======================================================================================
      //-----------------------------------------
      $(".nav-link").on('click', function(event) {

        if (this.hash !== "") {
        event.preventDefault();
        
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top 
        }, 1000, function(){
       
          window.location.hash = hash;
        });
        }
      });

// Navbar scrolling
  //-------------------------------------
    $window.on("scroll",function () {

      var bodyScroll = $window.scrollTop(),
        navbar = $(".header");

      if(bodyScroll > 100){

        navbar.addClass("nav-scroll");

      }else{

        navbar.removeClass("nav-scroll");
      }
    });

    
  })(jQuery);












