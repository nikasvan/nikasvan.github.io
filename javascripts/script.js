$(document).ready(function($) {

    //Canvas Of My Body
    var myStickman = document.getElementById("my-body");
    var context = myStickman.getContext('2d');

    context.strokeStyle = "#2098D1";

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

