'use strict';

window.onload = function ()
{
   animationHandler();
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