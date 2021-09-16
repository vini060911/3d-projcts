const
geometry = new THREE.SphereGeometry(),
textura = new THREE.TextureLoader().load( 'https://static.vecteezy.com/system/resources/previews/000/142/156/original/mapa-mundi-vector.jpg' ),
cena = new THREE.TextureLoader().load( 'https://th.bing.com/th/id/R.e2c5c17b50b15da87ea1ae78f0538a7b?rik=WZV2O5c3FjexsA&riu=http%3a%2f%2ffarm9.staticflickr.com%2f8060%2f8263358842_a2748b2170_z.jpg&ehk=UWDC1bSwYQjyIH%2bGLuXhAbQ8eXQdb003w9WzRiPFzyc%3d&risl=&pid=ImgRaw&r=01' ),
material = new THREE.MeshBasicMaterial( { map: textura } ),
esfera = new THREE.Mesh( geometry, material )

scene.background = cena

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame( animate );

  esfera.rotation.y += Math.PI/360;

  renderer.render( scene, camera );
};
const stop = function () {
	console.log("Stop.")
	scene.remove( esfera )
};
var bool_state = false
document.getElementById("enviar").addEventListener("click", () => {
	bool_state = !bool_state
	switch(bool_state) {
		case true:
		     scene.add( esfera )
		     animate();
		break;
			
		case false:
		     stop();
		break;
	}
});
