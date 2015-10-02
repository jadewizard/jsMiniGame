window.onload = init;

var map;
var ctxMap;
var drawBtn;
var clearBtn;
var gameMapWidth = 240;
var gameMapHeight = 400;
var startData = Date.Now;

function init()
{
    map = document.getElementById('map');
    map.width = gameMapWidth;
    map.height = gameMapHeight;
    ctxBg = map.getContext("2d");
}

var time = setInterval(function()
{
    var timePassed = Date.Now - startData;
    if (timePassed >= 2000)
    {
        clearInterval(time);
    }

    x = Math.round((Math.random() * (1440 - 12)));
    y = Math.round((Math.random() * (1440 - 12)));
    drawObject(x,y);
})

function drawObject(x,y)
{
    clear();
    ctxBg.fillStyle = "#000"
    ctxBg.fillRect(x,y,20,20);
}

function clear()
{
    ctxBg.clearRect(0,0,240,400);
}
