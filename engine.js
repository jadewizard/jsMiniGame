//window.onload = init();

function circle(x,y,r)
{
    this.x = x;
    this.y = y;
    this.r = r;

    this.draw = function(color, globalAlpha)
    {
        //context.globalAlpha = globalAlpha;
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
        //context.globalAlpha = globalAlpha;
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
        //context.globalAlpha = globalAlpha;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.w, this.h);
    }
}

function block(x,y,oneWidth,oneHeight,row,col,padding)
{
    this.x = x;
    this.y = y;
    this.w = oneWidth;
    this.h = oneHeight;
    this.p = padding;

    block = new Array(row);

    for(i = 0; i < row; i++)
    {
        for(j = 0; j < col; j++)
        {
            block[i,j] = 1;
        }
    }

    this.draw = function (color)
    {
        for(i = 0; i < row; i++)
        {
            for(j = 0; j < col; j++)
            {
                context.fillStyle = color;
                context.fillRect(i * (this.w + this.p), j * (this.h + this.p), this.w, this.h);
            }
        }
    }
}

function update()
{
    if (ball.x + ball.r > 480 || ball.x - ball.r < 0)
    {
        speedX = -speedX;
    }

    if (ball.y - ball.r < 0)
    {
        speedY = -speedY;
    }
    else if (ball.y + ball.r > 300)
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
    canvas.onmousemove = function(event)
    {
        racket.x = event.pageX - 100;
    }
    field.draw("#FFF", 0.1);
    block.draw("#F00");
    ball.draw("#000", 1);
    racket.draw("#F00",10);
    update();
}

function init()
{
    //Отрисовываем круг и поле
    field = new rect(0,0,480,320);
    ball  = new circle(field.w / 2, field.h / 2, 15);
    racket = new racket(145, 290, 200, 15);
    block = new block(0, 0, 25, 25, 18, 5, 1,5);

    //Задаём скорость
    speedX = 5;
    speedY = 5;

    //Задаём параметры
    canvas = document.getElementById('field');
    canvas.width = 480;
    canvas.height = 320;
    context = canvas.getContext("2d");
    setInterval(draw,12);
}
