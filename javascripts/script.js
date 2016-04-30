$(document).ready(function($) {

    //Preloader
    setTimeout(function(){
        $('body').addClass('loaded');
        $('body').css('overflow','auto');
    }, 3000);

    //Menu scrollTo
    $('.menu').find('ul a').on('click', function(e) {
        console.log('clicked')
        e.preventDefault();
        var href = $(this).attr('href');
        var tag = $(href);
        $('html,body').animate({ scrollTop: tag.offset().top }, 'slow');
    });

    //Skills Navigation
    $('.skills-nav a').on('click', function(e) {
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


//Canvas Of My Body
var myStickman = document.getElementById("my-body");
var context = myStickman.getContext('2d');

context.strokeStyle = "#1e90ff";

context.moveTo(150, 0);
context.lineTo(150, 65);
context.stroke();


context.moveTo(150, 30);
context.lineTo(200, 15);
context.stroke();


context.moveTo(150, 30);
context.lineTo(100, 15);
context.stroke()


context.moveTo(150, 65);
context.lineTo(200, 80);
context.stroke();


context.moveTo(150, 65);
context.lineTo(100, 80);
context.stroke();


context.moveTo(210, 75);
context.lineTo(200, 80);
context.stroke();


context.moveTo(90, 75);
context.lineTo(100, 80);
context.stroke();


});





