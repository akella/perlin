import Perlin from './lib/perlin';




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
	
	// ctx.fillRect(0,0, 100,100);
	


	for (var j = 0; j < 50; j++) {
		ctx.beginPath()
		for (var i = 0; i < 30; i++) {
			ctx.lineTo(i*20,j*10 + 100*Perlin(100*i/size,j/10,time/100));
		}
		ctx.stroke();
	}

}
let time = 0;
function render(){
	draw();
	time++;
	window.requestAnimationFrame(render);
}
	
render();
