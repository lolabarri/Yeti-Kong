//iceblue: rgb(162,210,223)

window.onload = function() {

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//Draw floor

ctx.fillStyle = 'rgb(162,210,223)';
ctx.fillRect(0, 630, 600, 650);

//Draw platforms

ctx.beginPath();
ctx.moveTo(75, 575);
ctx.lineTo(600, 550);
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgb(162,210,223)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 460);
ctx.lineTo(525, 485);
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgb(162,210,223)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 400);
ctx.lineTo(600, 375);
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgb(162,210,223)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 275);
ctx.lineTo(525, 300);
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgb(162,210,223)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 200);
ctx.lineTo(600, 175);
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgb(162,210,223)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(525, 125);
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgb(162,210,223)';
ctx.stroke();

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