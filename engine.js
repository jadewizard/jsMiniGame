//window.onload = init();

function circle(x,y,r)
{
    this.x = x;
    this.y = y;
    this.r = r;

    this.draw = function(color, globalAlpha)
    {
        context.globalAlpha = globalAlpha;
        context.fillStyle = color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }
}

function rect(x, y, width, height)
{
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;

    this.draw = function (color, globalAlpha)
    {
        context.globalAlpha = globalAlpha;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.w, this.h);
    }
}

function racket(x, y, width, height)
{
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;

    this.draw = function (color, globalAlpha)
    {
        context.globalAlpha = globalAlpha;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.w, this.h);
    }
}

function update()
{
    if (ball.x + speedX > 480 || ball.x + speedX < 0)
    {
        speedX = -speedX;
    }

    if (ball.y + speedY < 0)
    {
        speedY = -speedY;
    }
    else if (ball.y + speedY > 320)
    {
        if ((ball.x > racket.x) && (ball.x < racket.x + racket.w))
        {
            speedY = -speedY;
        }
        else
        {
            //alert();
        }
    }

    ball.x += speedX;
    ball.y += speedY;
}

function draw()
{
    field.draw("#000", 0.1);
    ball.draw("#F00", 1);
    racket.draw("#F00",1);
    update();
}

function init()
{
    //Отрисовываем круг и поле
    field = new rect(0,0,480,320);
    ball  = new circle(field.w / 2, field.w / 2, 20);
    racket = new racket(145, 290, field.w / 2,15);

    //Задаём скорость
    speedX = 5;
    speedY = 5;

    //Задаём параметры
    canvas = document.getElementById('field');
    canvas.width = 480;
    canvas.height = 320;
    context = canvas.getContext("2d");
    setInterval(draw,1000 / 50);
}

