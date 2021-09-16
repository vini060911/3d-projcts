const scene = new THREE.Scene(); //Cena.
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//Câmera.

const renderer = new THREE.WebGLRenderer();//Renderizador webgl.
renderer.setSize( window.innerWidth, window.innerHeight );//Define o tamanho do renderizador.
document.body.appendChild( renderer.domElement );//Adiciona ao body do html o elemento DOM do renderizador

const geometry = new THREE.SphereGeometry(); //Cria o sólido geométrico que servirá para criar a esfera.
const texture = new THREE.TextureLoader().load("https://media.istockphoto.com/photos/moon-surface-picture-id470801984");//Carrega uma textura de lua para a esfera.
const material = new THREE.MeshBasicMaterial( { map:texture } );//Cria o material da esfera
const s = new THREE.Mesh( geometry, material );//Cria a esfera.
scene.add( s );//Adiciona a esfera na cena.
camera.position.z = 5;//Define a posição z da câmera para  5.
const animate = function () { //Cria a função de animação da esfera.
  requestAnimationFrame( animate );//Faz a animação funcionar.
  s.rotation.x += 0.01;//Muda a rotação x da esfera por 0.01.
  s.rotation.y += 0.01;//Muda a rotação y da esfera por 0.01.
  
  renderer.render( scene, camera );
};
animate();//Anima a esfera.
