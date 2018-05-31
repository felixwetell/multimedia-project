'use strict';

// Kör en metod när fönstret har laddats
window.onload = function ()
{
   listener();
};

// Lyssnare som lyssnar på en knapp som hanterar när diagrammet ska visas
function listener ()
{
    // Hittar knappen och lägger till en lyssnare
    let button = document.querySelector ( '#diagramButton' );
    button.addEventListener ( 'click', animateDiagram, false );

    // Metod för att animera diagrammet
    function animateDiagram ()
    {
        // Initierar variabler för staplarna
        let red, blue, grey;

        // Hittar staplarna
        red = document.querySelector ( '#red' );
        blue = document.querySelector ( '#blue' );
        grey = document.querySelector ( '#grey' );

        // Sätter dit attributen
        red.setAttribute ( 'height', '200' );
        blue.setAttribute ( 'height', '250' );
        grey.setAttribute ( 'height', '150' );

        // Animerar varje stapel
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
    }
}