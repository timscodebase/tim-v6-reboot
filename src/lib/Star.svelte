<script>
		import * as THREE from 'three';
		import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
		import * as SC from 'svelte-cubed';

		let star;
		let rotation = 0;
		let loader = new GLTFLoader();

		loader.load('star.gltf', (gltf) => {
				star = gltf.scene.children[0].geometry;
		});

		SC.onFrame(() => {
				rotation += 0.02;
		});
</script>

<div class="star-container">
		{#if star}
				<SC.Canvas antialias alpha>
						<SC.Mesh
								geometry={star}
								rotation={[-90, 0, rotation]}
								material={new THREE.MeshStandardMaterial({
										color: 0xffee9e,
										roughness: 0.25,
										metalness: 0.9
								})}
						/>
						<SC.PerspectiveCamera position={[3, 1, 3]} />
						<SC.AmbientLight intensity={2.5} />
						<SC.DirectionalLight intensity={0.7} />
						<SC.PointLight intensity={1.5} position={[2, 5, 2]} />
				</SC.Canvas>
		{/if}
</div>

<style>
		.star-container {
				width: 100px;
				height: 100px;
				position: relative;
		}
</style>