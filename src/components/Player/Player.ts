import * as THREE from "three";

class Player {
  body: THREE.Mesh;
  constructor() {
    this.body = new THREE.Mesh(
      new THREE.BoxGeometry(15, 15, 20),
      new THREE.MeshLambertMaterial({
        color: "white",
        flatShading: true,
      }),
    );

    this.body.position.z = 10;
    this.body.castShadow = true;
    this.body.receiveShadow = true;
  }
}

export const player = new Player();
