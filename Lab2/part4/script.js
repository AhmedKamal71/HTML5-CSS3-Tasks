var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 300;

var x = 0;
var y = 0;
var dx = 1; 
var dy = 1;

function drawLine() 
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(x, y);
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke();
    
    x += dx;
    y += dy;
    
    if (x >= canvas.width && y >= canvas.height) 
    {
        alert("The line reached the end of the canvas :)");
    } else {
        setTimeout(drawLine, 10);
    }
}


drawLine();