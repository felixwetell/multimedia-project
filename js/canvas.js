'use strict';

window.onload = function ()
{
    drawCanvas ();
};

function drawCanvas ()
{
    var canvas = document.getElementById( 'canvas' );
    var context = canvas.getContext ( '2d' );

    context.fillStyle = '#93F9B9';
    context.fillRect ( 0, 0, 736, 250 );
    context.strokeStyle = '#1D976C';
    context.strokeRect ( 10, 10, 716, 230  );

    context.fillStyle = '#1D976C';
    context.fillRect ( 20, 100, 50, 50 );

    context.strokeStyle = '#efefef';
    context.lineWidth = 10;
    context.beginPath ();
    context.moveTo ( 100, 190 );
    context.lineTo ( 200, 150 );
    context.lineTo ( 500, 225 );
    context.stroke ();
    context.closePath ();
}