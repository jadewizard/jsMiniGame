window.onload = init;

var x = 0;
var y = 0;
var from = 15;
var to = 200;
var startTime = new Date().getTime(); //Текущее время
var animationTime = 5000; //Длительность анимации
var img  = new Image();
img.src = "m.png";

function init ()
{
    field = document.getElementById("field");
    context = field.getContext("2d");
    context.fillStyle = "#000";
}

timer = setInterval(function()
{
    nowTime = new Date().getTime() - startTime;
    aProgerss = nowTime / animationTime;
    result = (to - from) * Math.sin(aProgerss) + from;

    drawElement(result);

},800);

function drawElement (x)
{
    clear();
    //x = Math.round((Math.random() * (240-50)));
    y = Math.round((Math.random() * (400-50)));
    context.drawImage(img, x, y);
}

function clear ()
{
    context.clearRect(0,0,240,400);
}