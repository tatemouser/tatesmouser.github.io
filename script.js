// script.js

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    // Handle the click event on sidebar links
    $('.list-unstyled.components li a').on('click', function () {
        $('.list-unstyled.components li').removeClass('active'); // Remove 'active' class from all items
        $(this).closest('li').addClass('active'); // Add 'active' class to the clicked item
    });

    // Handle the sidebar toggle button click event
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

$(window).resize(function() {
    var recaptcha = $(".h-captcha");
    if(recaptcha.css('margin') == '1px') {
        var newScaleFactor = recaptcha.parent().innerWidth() / 304;
        recaptcha.css('transform', 'scale(' + newScaleFactor + ')');
        recaptcha.css('transform-origin', '0 0');
    }
    else {
        recaptcha.css('transform', 'scale(1)');
        recaptcha.css('transform-origin', '0 0');
    }
});

function resizeReCaptcha() {

    var width = $( ".h-recaptcha" ).parent().width();
  
    if (width < 302) {
        var scale = width / 302;
    } else {
        var scale = 1;
    }
  
    $( ".h-captcha" ).css('transform', 'scale(' + scale + ')');
    $( ".h-captcha" ).css('-webkit-transform', 'scale(' + scale + ')');
    $( ".h-captcha" ).css('transform-origin', '0 0');
    $( ".h-captcha" ).css('-webkit-transform-origin', '0 0');
  };
  
  $( document ).ready(function() {
  
      $( window ).on('resize', function() {
          resizeReCaptcha();
      });
  
      resizeReCaptcha();
  
  });
