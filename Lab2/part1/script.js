var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');

//------------------------------------ First rect -----------------------------------------

var grd1 = context.createLinearGradient(0, 0, 0, 200);
grd1.addColorStop(0, 'rgb(51, 194, 223)');
grd1.addColorStop(1, 'rgb(235, 235, 235)');

context.fillStyle = grd1;
context.fillRect(25, 10, 450, 200);

//------------------------------------ Second rect ----------------------------------------

var grd2 = context.createLinearGradient(0, 200, 0, 400);
grd2.addColorStop(0, 'rgb(90, 214, 45)');
grd2.addColorStop(1, 'rgb(235, 235, 235)');

context.fillStyle = grd2;
context.fillRect(25, 200, 450, 200);

//------------------------------------ Lines -----------------------------------------------

context.beginPath();
context.moveTo(320, 150);
context.lineTo(160, 150); 
context.lineWidth = 3;
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(320, 150);
context.lineTo(320, 270);
context.lineWidth = 3;
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(160, 150);
context.lineTo(160, 270);
context.lineWidth = 3;
context.stroke();
context.closePath();

//--------------------------------------------------------------------------------------------