import * as THREE from "three";

export function Wheel(position: number): THREE.Mesh {
  const wheelGeometry = new THREE.BoxGeometry(12, 35, 15);
  const wheelMaterial = new THREE.MeshLambertMaterial({
    color: "black",
    flatShading: true,
  });
  const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);

  wheel.position.x = position;
  wheel.position.z = 6;

  return wheel;
}
