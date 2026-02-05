import * as THREE from "three";
import { MAP } from "../../../config/constants";

export class Tree {
  public readonly group: THREE.Group;
  private readonly trunkHeight: number;
  constructor(tileIndex: number, height: number, trunkHeight?: number) {
    this.trunkHeight = trunkHeight || 20;
    this.group = new THREE.Group();
    this.group.position.x = tileIndex * MAP.tileSize;

    const trunk = this.createTrunk();
    const crown = this.createCrown(height);

    this.group.add(trunk);
    this.group.add(crown);
  }

  private createTrunk(): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(10, 10, this.trunkHeight);
    const material = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 10;
    return mesh;
  }

  private createCrown(height: number): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(
      MAP.tileSize / 2,
      MAP.tileSize / 2,
      (MAP.tileSize / 2) * height,
    );
    const material = new THREE.MeshLambertMaterial({ color: 0x228b22 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = this.trunkHeight + (MAP.tileSize / 4) * height;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }
}
