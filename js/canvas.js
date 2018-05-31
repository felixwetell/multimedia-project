'use strict';

// Startar metoden draw när förnstret har laddats
window.onload = function ()
{
    draw ();
};

// Ritar upp en canvas med flera rörande objekt
function draw ()
{
    // Hittar canvas och hämtar in context
    let canvas = document.getElementById ( 'canvas' );
    let ctx = canvas.getContext ( '2d' );

    // Initierar variabler
    let space = new Image ();
    let spaceship = new Image ();

    // Sätter en storlek
    spaceship.height = 40;
    spaceship.width =  25;

    // Hämtar in bilder
    space.src = 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/649694main_pia15417-43_full.jpg';
    spaceship.src = 'https://cdn2.iconfinder.com/data/icons/humano2/128x128/apps/alienblaster.png';

    // Sätter in startpositioner
    let pos1 = -250,
        pos2 = -250,
        pos3 = -250,
        pos4 = -250;

    // Hittar mittpunkten i canvas elementet
    let middle = canvas.width;

    // Metod för att flytta skeppen över skärmen
    function moveShip ()
    {
        // Ritar upp backgrunden och sparar
        ctx.drawImage ( space, 0, 0 );
        ctx.save();

        // Kollar om vart på canvasen skeppen är och skickar ut dem en efter en
        if ( pos1 < 650 )
        {
            // Ritar upp skeppet på en ny position
            ctx.drawImage ( spaceship, middle / 2.5, pos1 += 2 );
        }
        else if ( pos2 < 650 )
        {
            ctx.drawImage ( spaceship, middle / 4, pos2 += 7 );
        }

        else if ( pos3 < 650 )
        {
            ctx.drawImage ( spaceship, middle / 6, pos3 += 4 );
        }

        else if ( pos4 < 650 )
        {
            ctx.drawImage ( spaceship, middle / 1.5, pos4 += 5 );
        }
        // När alla skepp har kört en gång återställs alla skepp till orginal position och det börjar köra igen
        else
        {
            pos1 = -250;
            pos2 = -250;
            pos3 = -250;
            pos4 = -250;
        }
        ctx.restore();
    }
    // Sätter en rit-interval på 10 ms mellan varje "bild"
    setInterval ( moveShip,  10 );
}