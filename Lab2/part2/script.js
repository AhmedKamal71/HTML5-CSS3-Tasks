var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');


//--------------------------------------------- First Circle (Inner) ------------------------------------------

var gradient = context.createRadialGradient(350, 200, 0, 230, 100, 300);
gradient.addColorStop(0, 'white');
gradient.addColorStop(.9, 'rgb(18, 0, 217)'); 
context.fillStyle = gradient;


context.beginPath();
context.arc(250, 250, 150, 0, 2 * Math.PI);
context.fill();

//--------------------------------------------- Secont Circle (Outer) -----------------------------------------

var grd = context.createRadialGradient(380, 360, 0, 200, 200, 350);
grd.addColorStop(0, 'rgb(192, 196, 219)');
grd.addColorStop(0.5, 'rgb(26, 44, 240)'); 

context.fillStyle = grd;

context.beginPath();
context.arc(250, 250, 110, 0, 2 * Math.PI);
context.fill();

//------------------------------------------------- The N letter -----------------------------------------------

context.font = '230px Arial';
context.fillStyle = 'white';


context.fillText('N', 170, 330);

//----------------------------------------------------------------------------------------------------------------