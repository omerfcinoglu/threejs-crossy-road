import * as THREE from "three";

export function DirectionalLight(): THREE.DirectionalLight {
  const dirLight = new THREE.DirectionalLight();

  dirLight.position.set(-100, -100, 200);
  dirLight.up.set(0, 0, 1);
  dirLight.castShadow = true;

  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;

  const cam = dirLight.shadow.camera;
  cam.up.set(0, 0, 1);
  cam.left = -400;
  cam.right = 400;
  cam.top = 400;
  cam.bottom = -400;
  cam.near = 50;
  cam.far = 400;

  return dirLight;
}
