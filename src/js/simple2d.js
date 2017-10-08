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


		for (var i = 0; i < size; i++) {
			ctx.fillRect(i,0,1,500*Perlin(i/150,time/100,0))

		}

		ctx.restore()
	}

	let time = 0;
	function render(){
		draw();
		time++;
		window.requestAnimationFrame(render);
	}
		
	render();



