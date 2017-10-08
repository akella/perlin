import Perlin from './lib/perlin';

console.log(Perlin(0,1,0),Perlin(0.01,1,0));


let size = 600;
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = size;
canvas.height = size;
let number = 100;
let radius = 100;
let x,y;
document.body.appendChild(canvas);


function draw(){
	ctx.clearRect(0,0,size,size);

	// ctx.fillRect(100,600*Math.random(),10,10);
	// ctx.fillRect(100,600*Perlin(time/100,0,0),10,10);
	ctx.save();
	ctx.translate(size/2,size/2);
	ctx.fillRect(0,0,10,10);
	ctx.fillStyle = '#FF0000';
	ctx.beginPath();
	for (var i = 0; i < number; i++) {
		// ctx.fillRect(i,0,1,200*Perlin(i/10,time/100,0))
		let angle = i*2*Math.PI/number;
		x = radius*Math.sin(angle) + 40*Perlin(Math.sin(angle),time/100,0);
		y = radius*Math.cos(angle) + 40*Perlin(Math.cos(angle),time/100,0);
		// ctx.fillRect(x,y,1,1);
		ctx.lineTo(x,y);

	}
	ctx.closePath();
	ctx.fill()


	ctx.strokeStyle = '#FF0000';
	ctx.fillStyle = '#00FF00';
	ctx.beginPath();
	for (var i = 0; i < number; i++) {
		// ctx.fillRect(i,0,1,200*Perlin(i/10,time/100,0))
		let angle = i*2*Math.PI/number;
		x = radius*Math.sin(angle) + 40*Perlin(Math.sin(angle) + time/100,time/100,0);
		y = radius*Math.cos(angle) + 40*Perlin(Math.cos(angle) + time/100,time/100,0);
		// ctx.fillRect(x,y,1,1);
		ctx.lineTo(x,y);

	}
	ctx.closePath();
	ctx.fill();
}

let time = 0;
function render(){
	draw();
	time++;
	window.requestAnimationFrame(render);
}
	
render();