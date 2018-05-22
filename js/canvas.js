'use strict';


window.onload = function ()
{
    draw ();
};

function draw ()
{
    let canvas = document.getElementById ( 'canvas' );
    let ctx = canvas.getContext ( '2d' );

    let space = new Image ();
    let spaceship = new Image ();
    let spaceship2 = new Image ();

    spaceship.height = 40;
    spaceship.width =  25;

    space.src = 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/649694main_pia15417-43_full.jpg';
    spaceship.src = 'https://cdn2.iconfinder.com/data/icons/humano2/128x128/apps/alienblaster.png';
    spaceship2.src = 'https://cdn2.iconfinder.com/data/icons/humano2/128x128/apps/alienblaster.png';

    let pos1 = -250,
        pos2 = -250,
        pos3 = -250,
        pos4 = -250;

    let middle = canvas.width;

    function moveShip ()
    {
        ctx.drawImage ( space, 0, 0 );
        ctx.save();

        if ( pos1 < 650 )
        {
            ctx.drawImage ( spaceship, middle / 2.5, pos1 += 2 );
        }
        else if ( pos2 < 650 )
        {
            ctx.drawImage ( spaceship2, middle / 4, pos2 += 7 );
        }

        else if ( pos3 < 650 )
        {
            ctx.drawImage ( spaceship2, middle / 6, pos3 += 4 );
        }

        else if ( pos4 < 650 )
        {
            ctx.drawImage ( spaceship2, middle / 1.5, pos4 += 5 );
        }

        else
        {
            pos1 = -250;
            pos2 = -250;
            pos3 = -250;
            pos4 = -250;
        }
        ctx.restore();

    }
    setInterval ( moveShip,  10 );
}