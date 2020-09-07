/* nav bar */

/*$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('#top').hide();
        } else {
            $('.navbar').removeClass('active');
            $('#top').show();
        }
    });
});*/

/* slider */

$( document ).ready(function() {
  $('#slider').owlCarousel({
      loop:true,
      autoplay:true,
      smartSpeed: 2000,
      margin:0,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      animateIn: 'sladeInRight',
      animateOut: 'slideOutLeft',
      autoplayTimeout:4000,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false,
              dots: false
          },
          768:{
              items:1,
              nav:true,
              dots: false
          },
          992:{
              items:1,
              nav:true,
              dots: false
          },
          1200:{
              items:1,
              nav:true,
              dots: false
          }
      }
  });
});

/* TESTIMONIAL */

$( document ).ready(function() {
  $('#testimonial-slider').owlCarousel({
      loop:true,
      autoplay:true,
      smartSpeed: 2000,
      margin: 0,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      animateIn: 'sladeInRight',
      animateOut: 'slideOutLeft',
      autoplayTimeout:4000,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false,
              dots: false
          },
          768:{
              items:1,
              nav:false,
              dots: true
          },
          992:{
              items:2,
              nav:false,
              dots: true
          },
          1200:{
              items:2,
              nav:false,
              dots: true
          }
      }
  });
});

/* PROJECTS */

$(document).ready(function() {
    $(".lawn-project").show();
    $(".garden-project").hide();
    $(".planting-project").hide();
    $(".snow-project").hide();
    
    $(".lawn-ling").click(function(){
        $(".lawn-ling").addClass("active-proj");
        $(".garden-link").removeClass("active-proj");
        $(".planting-link").removeClass("active-proj");
        $(".snow-link").removeClass("active-proj");
        
        $(".lawn-project").fadeIn(1000);
        $(".garden-project").hide();
        $(".planting-project").hide();
        $(".snow-project").hide();
    });
    
    $(".garden-link").click(function(){
        $(".lawn-ling").removeClass("active-proj");
        $(".garden-link").addClass("active-proj");
        $(".planting-link").removeClass("active-proj");
        $(".snow-link").removeClass("active-proj");
        
        $(".lawn-project").hide();
        $(".garden-project").fadeIn(1000);
        $(".planting-project").hide();
        $(".snow-project").hide();
    });
    
    $(".planting-link").click(function(){
        $(".lawn-ling").removeClass("active-proj");
        $(".garden-link").removeClass("active-proj");
        $(".planting-link").addClass("active-proj");
        $(".snow-link").removeClass("active-proj");
        
        $(".lawn-project").hide();
        $(".garden-project").hide();
        $(".planting-project").fadeIn(1000);
        $(".snow-project").hide();
    });
    
    $(".snow-link").click(function(){
        $(".lawn-ling").removeClass("active-proj");
        $(".garden-link").removeClass("active-proj");
        $(".planting-link").removeClass("active-proj");
        $(".snow-link").addClass("active-proj");
        
        $(".lawn-project").hide();
        $(".garden-project").hide();
        $(".planting-project").hide();
        $(".snow-project").fadeIn(1000);
    });
    
});

/* CAPTCHA CONTACT */

var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha() {
  event.preventDefault();
  debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    alert("Reservation successfully sent !")
  }else{
    alert("Invalid Captcha. try Again !");
    createCaptcha();
  }
}





