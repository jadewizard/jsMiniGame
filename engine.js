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

function update()
{
    if (ball.y - ball.r < 0 || ball.y + ball.r > 320)
    {
        speedY = -speedY;
    }

    if (ball.x - ball.r < 0 || ball.x + ball.r > 480)
    {
        speedX = -speedX;
    }

    ball.x += speedX;
    ball.y += speedY;
}

function draw()
{
    field.draw("#000", 0.1);
    ball.draw("#F00", 1);
    update();
}

function init()
{
    //Отрисовываем круг и поле
    field = new rect(0,0,600,600);
    ball  = new circle(field.width / 2, field.height / 2, 24);

    //Задаём скорость
    speedX = 5;
    speedY = 5;

    //Задаём параметры
    var canvas = document.getElementById('field');
    canvas.width = 600;
    canvas.height = 600;
    context = canvas.getContext("2d");
    setInterval(draw,1000 / 50);
}
