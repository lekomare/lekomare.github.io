var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75, // field of view, value is in degrees
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near and far clipping plane
  1000
);
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // the width and height of the area we want to fill
document.body.appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material); // mesh is an object that takes a geometry, and applies a material to it
scene.add(cube); // added to the coordinates (0,0,0)

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01; // right above the renderer.render call
  cube.rotation.y += 0.01; // run every frame (normally 60 times per second)

  renderer.render(scene, camera);
} // create a loop that causes the renderer to draw the scene every time the screen is refreshed
// pauses when the user navigates to another browser tab
animate();
