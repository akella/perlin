import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE)

import Perlin from './lib/perlin';




let size = 150;
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = size;
canvas.height = size;
canvas.classList.add('tempcanvas');
document.body.appendChild(canvas);




function loadImages(paths,whenLoaded){
  var imgs=[];
  paths.forEach(function(path){
    var img = new Image;
    img.onload = function(){
      imgs.push(img);
      if (imgs.length==paths.length) whenLoaded(imgs);
    }
    img.src = path;
  });
}

function fillUp(array,max){

	var length = array.length;
	if(max < length){
		array = array.slice(0,max);
	} else{
		for(var i=0;i<max-length;i++){
			array.push(array[Math.floor(Math.random()*length)])
		}
	}
	
	return array;
}
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

function getArrayFromImage(img){
	let imageCoords = [];
	ctx.clearRect(0,0,size,size);
    ctx.drawImage(img, 0, 0, size, size);
    let data = ctx.getImageData(0, 0, size, size);

    data = data.data;

    for(var y = 0; y < size; y++) {
      for(var x = 0; x < size; x++) {
        var red = data[((size * y) + x) * 4];
        var green = data[((size * y) + x) * 4 + 1];
        var blue = data[((size * y) + x) * 4 + 2];
        var alpha = data[((size * y) + x) * 4 + 3];
	        if(alpha>0){
	        	imageCoords.push([10*(x - size/2),10*(size/2 - y),[red/256,green/256,blue/256]]);
	        }
        }
      }
      // return shuffle(fillUp(imageCoords, 3000));
      return fillUp(imageCoords, 15000);
}


let images = ['pickle.svg','rick1.svg','img/close.svg'];
loadImages(images,function(loadedImages){
	var gallery = [];
	loadedImages.forEach(function(el,index){
		gallery.push(getArrayFromImage(loadedImages[index]));
	});
	console.log(gallery);

	var camera, controls, scene, renderer,geometry;

	
	function init() {

		scene = new THREE.Scene();
		scene.background = new THREE.Color( 0xcccccc );
		// scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );

		var container = document.getElementById( 'container' );
		container.appendChild( renderer.domElement );

		camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 3000 );
		camera.position.z = 500;

		controls = new OrbitControls( camera, renderer.domElement );


		





		// ЧТО ЕСТЬ НА СЦЕНЕ
		var texture = (new THREE.TextureLoader).load("rick.png");
		var material = new THREE.PointCloudMaterial({
		  size: 20,
		  // vertexColors: THREE.VertexColors,
		  map: texture,
		  alphaTest: 0.5
		});

		
		
		geometry = new THREE.Geometry();
		var x, y, z;




		gallery[0].forEach((el,index)=>{
				geometry.vertices.push(new THREE.Vector3(el[0], el[1], Math.random()*100));
				geometry.colors.push(new THREE.Color(Math.random(), Math.random(), Math.random()));
			
		});

		var pointCloud = new THREE.PointCloud(geometry, material);

		scene.add(pointCloud);

		console.log(geometry.colors[0]);
		// Конец сцены

		window.addEventListener( 'resize', onWindowResize, false );

	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	


	var i = 0;
	var time = 0;
	// console.log(geometry);
	function animate() {
		i++;
		time++;
		requestAnimationFrame( animate );


		geometry.vertices.forEach( function(particle, index){
		  var dX, dY, dZ;
		  dX = Math.sin(i/10 + index/2)/10;
		  dY = 0;
		  dZ = 0;
		  // particle.add(new THREE.Vector3(dX, dY, dZ));
		  
		  // console.log(index);
		  var x = Math.floor(index/150);
		  var y = index%150;
		  particle.x = x * 20 - 600;
		  particle.y = y * 20 - 1500;
		  particle.z = 600*Perlin(x/10, time/100 + y/20,0) - 600;
		});
		geometry.verticesNeedUpdate = true;
		// geometry.colorsNeedUpdate = true;
		

		render();

	}

	
	

	function render() {
		renderer.render( scene, camera );
	}

	init();
	animate();

	var current =0;
	document.body.addEventListener('click',function(){
		current++;
		console.log(current);
		current = current % gallery.length;
		geometry.vertices.forEach( function(particle, index){
			let tl = new TimelineMax();
			tl.to(particle,1,{x:gallery[current][index][0],y:gallery[current][index][1]});
			geometry.colors[index] = new THREE.Color(
				gallery[current][index][2][0], 
				gallery[current][index][2][1], 
				gallery[current][index][2][2],
			);
		})
	
	})


});