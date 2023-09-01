// script.js

// Set up the scene
const scene = new THREE.Scene();




// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube for the architectural interior
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// script.js

// ... (previous code)

// Create a cube for the architectural interior
// const geometry = new THREE.BoxGeometry(2, 2, 2);

// Create a wireframe geometry
const wireframe = new THREE.WireframeGeometry(geometry);

// Create a material for the wireframe
const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

// Create a wireframe mesh
const wireframeMesh = new THREE.LineSegments(wireframe, wireframeMaterial);

// Add the wireframe mesh to the scene
scene.add(wireframeMesh);

// ... (rest of the code)


// Set up animation
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
