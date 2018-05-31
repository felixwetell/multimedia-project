'use strict';

window.onload = function ()
{
   animationHandler();
   listener();
};

function animationHandler()
{
    let spin = document.querySelector ( '#animate' );
    let scale = document.querySelector ( '#svg-holder' );

    scale.addEventListener ( 'mouseenter',
        function ()
        {
            spin.classList.add ( 'animation-spin' );
            scale.classList.add ( 'animation-scale' );
        }
    );

    scale.addEventListener ( 'mouseleave',
        function ()
        {
            spin.pauseAnimations = true;
            scale.pauseAnimations = true;
            spin.classList.remove ( 'animation-spin' );
            scale.classList.remove ( 'animation-scale' );
        }
    );
}

function listener ()
{
    let button = document.querySelector ( '#diagramButton' );

    button.addEventListener ( 'click', animateDiagram, false );

    function animateDiagram ()
    {
        let red, blue, grey;

        red = document.querySelector ( '#red' );
        blue = document.querySelector ( '#blue' );
        grey = document.querySelector ( '#grey' );

        red.setAttribute ( 'height', '200' );
        blue.setAttribute ( 'height', '250' );
        grey.setAttribute ( 'height', '150' );

        red.animate({
            transform: ['scaleX(0)', 'none'],
        }, {
            height: 200,
            duration: 1000,
            fill: 'forwards',
            easing: 'ease',
        });

        blue.animate({
            transform: ['scaleX(0)', 'none'],
        }, {
            height: 200,
            duration: 1000,
            fill: 'forwards',
            easing: 'ease',
        });

        grey.animate({
            transform: ['scaleX(0)', 'none'],
        }, {
            height: 200,
            duration: 1000,
            fill: 'forwards',
            easing: 'ease',
        });

        // red = 200
        // blue = 250
        // grey = 150
    }
}