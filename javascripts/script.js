$(document).ready(function($) {
    $('.menu').find('ul a').on('click', function(e) {
        console.log('clicked')
        e.preventDefault();
        var href = $(this).attr('href');
        var tag = $(href);
        $('html,body').animate({ scrollTop: tag.offset().top }, 'slow');
    });


    $('.skills-nav a').on('click', function(e) {

    // e.preventDefault();
    // var url = this.href; 
    // var $content = $('#skills-wrapper');

    // $('.skills-nav a.active').removeClass('active');
    // $(this).addClass('active');
    // $('#skills-container').remove(); 

    // $.ajax({
    //     type: "GET",
    //     url: url,
    //     timeout: 2000, 
    //     // async: false,
    //     beforeSend: function() { 
    //         $content.append('<div id="load">Loading, please wait...</div>'); 
    //     },
    //     complete: function() {
    //         $('#load').remove(); 
    //     },
    //     success: function(data) { 
    //         $content.html($(data).find('#skills-container')).hide().fadeIn(400);
    //     },
    //     error: function() {
    //         $content.html('<div class="container">Please try again soon.</div>');
    //     }
    // });

    e.preventDefault();
    var url = this.href;
    $('.skills-nav li').removeAttr("style");
    $('.skills-nav li').removeClass("active");
    $(this).parent().css("background-color", "#1e90ff");


    $('#skills-container ').remove();
    $('#skills-wrapper').load(url + ' #skills-container ',function(){
        $.getScript("javascripts/percentageCyrcle.js"); 
    }).hide().fadeIn(1000);
});




    // $('.number').each(function() {
    //     //test
    //     var percent = $(this).html();
    //     switch (percent) {
    //         case '100%':
    //             $(this).parent().siblings(".slice-left").addClass('time-left');
    //             $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice', 'animation-name': 'left-slice100' });
    //             break;
    //         case '50%':
    //             $(this).parent().siblings(".slice-left").addClass('time-left');
    //             $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice50', 'animation-name': 'left-slice50' });
    //             break;
    //         case '90%':
    //             $(this).parent().siblings(".slice-left").addClass('time-left');
    //             $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice50', 'animation-name': 'left-slice90' });
    //             break;
    //         case '60%':
    //             $(this).parent().siblings(".slice-left").addClass('time-left');
    //             $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice50', 'animation-name': 'left-slice60' });
    //             break;
    //         default:
    //             break;
    //     }
    // });







    // var $window = $(window);
    // var $animation_element = $('.my-skills');
    // $window.on('scroll', check_if_in_view);
    // // $window.on('scroll resize', check_if_in_view);
    // $window.trigger('scroll');


    // function check_if_in_view() {

    //     var window_height = $window.height();
    //     var window_top_position = $window.scrollTop();
    //     var window_bottom_position = (window_top_position + window_height);
    //     var element_height = $animation_element.outerHeight();
    //     var element_top_position = $animation_element.offset().top + 50;
    //     var element_bottom_position = (element_top_position + element_height);
    //     if ((element_bottom_position >= window_top_position) &&
    //         (element_top_position <= window_bottom_position)) {

    //         $('.slice-right').addClass('time-right');
    //     $('.slice-left').addClass('time-left');
    //     //     var x = $('.slice-left');
    //     //     for (var i = 0; i <= x.length; i++) {
    //     //         // $swe.find('.number');
    //     //         var percent = $('.number').html();
    //     //         switch (percent) {
    //     //             case '100%':
    //     //                 $('.slice-left').css({ '-webkit-animation-name': 'left-slice','animation-name': 'left-slice' });
    //     //                 $('.slice-left').addClass('time-left');
    //     //                 break;
    //     //             case '50%':
    //     //                 $('.slice-left').css({ '-webkit-animation-name': 'left-slice50','animation-name': 'left-slice50' });
    //     //                 $('.slice-left').addClass('time-left');
    //     //                 break;
    //     //             default:
    //     //                 break;
    //     //         }
    //     //     }
    //     // } else {
    //     //     $('.slice-left').removeClass('time-left');
    //     //     $('.slice-right').removeClass('time-right');

    //     // }

    // }

    // var $animation_elements = $('.my-skills'); // tu ar imushava shecvale pirvelis klasi
    // var $window = $(window);

    // $window.on('scroll', check_if_in_view);
    // $window.on('scroll resize', check_if_in_view);
    // $window.trigger('scroll');

    // function check_if_in_view() {
    //     var window_height = $window.height();
    //     var window_top_position = $window.scrollTop();
    //     var window_bottom_position = (window_top_position + window_height);

    //     $.each($animation_elements, function() {
    //         var $element = $(this);
    //         var element_height = $element.outerHeight();
    //         var element_top_position = $element.offset().top;
    //         var element_bottom_position = (element_top_position + element_height);
    //         if ((element_bottom_position >= window_top_position) &&
    //             (element_top_position <= window_bottom_position)) {
    //             $('.slice-right').addClass('time-right');
    //             $('.slice-left').addClass('time-left');
    //         }
    //     });
    // }


});





var myStickman = document.getElementById("my-body");
var context = myStickman.getContext('2d');

context.strokeStyle = "#1e90ff";


/*Drawing the stick body*/
context.moveTo(150, 0);
context.lineTo(150, 65);
context.stroke();

/*Drawing the left arm*/
context.moveTo(150, 30);
context.lineTo(200, 15);
context.stroke();

/*Drawing the right arm*/
context.moveTo(150, 30);
context.lineTo(100, 15);
context.stroke()

/*Drawing the left limb*/
context.moveTo(150, 65);
context.lineTo(200, 80);
context.stroke();

/*Drawing the right limb*/
context.moveTo(150, 65);
context.lineTo(100, 80);
context.stroke();

/*Drawing the left foot*/
context.moveTo(210, 75);
context.lineTo(200, 80);
context.stroke();

/*Drawing the right foot*/
context.moveTo(90, 75);
context.lineTo(100, 80);
context.stroke();


// /*Drawing the stick body*/
// context.moveTo(150, 0);
// context.lineTo(150, 80);
// context.stroke();

// /*Drawing the left arm*/
// context.moveTo(150, 50);
// context.lineTo(200, 20);
// context.stroke();

// /*Drawing the right arm*/
// context.moveTo(150, 50);
// context.lineTo(100, 20);
// context.stroke()

// /*Drawing the left limb*/
// context.moveTo(150, 80);
// context.lineTo(200, 100);
// context.stroke();

// /*Drawing the right limb*/
// context.moveTo(150, 80);
// context.lineTo(100, 100);
// context.stroke();

// /*Drawing the left foot*/
// context.moveTo(200, 100);
// context.lineTo(210, 94);
// context.stroke();

// /*Drawing the right foot*/
// context.moveTo(100, 100);
// context.lineTo(90, 94);
// context.stroke();
