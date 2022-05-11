
import * as THREE from "https://1daveboy.github.io/ControlesdeOrbita/sc/three.module.js";
import { OrbitControls } from "https://1daveboy.github.io/ControlesdeOrbita/sc/OrbitControls.js";


var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);

//add camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//add geometry
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

var controls = new OrbitControls(camera, renderer.domElement);

controls.minDistance = 5; //distancia minima 
controls.maxDistance = 30; //distancia Maxima 

//controls.enableZoom = false; para deshabilitar el zoom 

//controls.enableRotate = false; para deshabilitar la rotación 

controls.enableDamping = true;//configurar la rotación 
controls.dampingFactor = 0.5;

controls.maxPolarAngle = Math.PI;

controls.screenSpacePanning = true;//para poder mover el objeto. 

//animation
var animate = function () {
  requestAnimationFrame(animate);

  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
