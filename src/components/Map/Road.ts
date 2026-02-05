import * as THREE from "three";
import { MAP } from "../../config/constants";

export class Road {
  group: THREE.Group;
  readonly #mesh: THREE.Mesh;
  constructor(rowIndex: number) {
    this.group = new THREE.Group();
    this.group.position.y = rowIndex * MAP.tileSize;

    this.#mesh = new THREE.Mesh(
      new THREE.BoxGeometry(MAP.tilesPerRow * MAP.tileSize, MAP.tileSize),
      new THREE.MeshLambertMaterial({ color: 0x454a59 }),
    );

    this.#mesh.position.z = 1.5;
    this.group.add(this.#mesh);
  }
}
