//iceblue: rgb(162,210,223)
//Global Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//Draw floor

function Gameboard() {
ctx.fillStyle = 'rgb(162,210,223)';
ctx.fillRect(0, 630, 600, 650);

//Draw ladders

ctx.beginPath();
ctx.moveTo(110, 630);
ctx.lineTo(110, 570);
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgb(130, 82, 1)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(480, 560);
ctx.lineTo(480, 480);
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgb(130, 82, 1)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(120, 465);
ctx.lineTo(120, 395);
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgb(130, 82, 1)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(220, 396);
ctx.lineTo(220, 281);
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgb(130, 82, 1)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 382);
ctx.lineTo(500, 295);
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgb(130, 82, 1)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350, 295);
ctx.lineTo(350, 185);
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgb(130, 82, 1)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(77, 200);
ctx.lineTo(77, 100);
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgb(130, 82, 1)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 185);
ctx.lineTo(500, 120);
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgb(130, 82, 1)';
ctx.stroke();
};

