import * as THREE from "three";
import { Wheel } from "./Wheel";
import { MAP } from "../../../config/constants";

export class Truck {
  group: THREE.Group;

  constructor(
    initialTileIndex: number,
    direction: boolean,
    color: THREE.ColorRepresentation,
  ) {
    this.group = new THREE.Group();

    this.group.position.x = initialTileIndex * MAP.tileSize;
    if (!direction) this.group.rotation.z = Math.PI;

    const cargo = new THREE.Mesh(
      new THREE.BoxGeometry(70, 35, 35),
      new THREE.MeshLambertMaterial({
        color: 0xb4c6fc,
        flatShading: true,
      }),
    );
    cargo.position.x = -15;
    cargo.position.z = 25;
    cargo.castShadow = true;
    cargo.receiveShadow = true;
    this.group.add(cargo);

    const cabin = new THREE.Mesh(
      new THREE.BoxGeometry(30, 30, 30),
      new THREE.MeshLambertMaterial({ color, flatShading: true }),
    );
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    cabin.position.x = 35;
    cabin.position.z = 20;
    this.group.add(cabin);

    const frontWheel = Wheel(37);
    this.group.add(frontWheel);

    const middleWheel = Wheel(5);
    this.group.add(middleWheel);

    const backWheel = Wheel(-35);
    this.group.add(backWheel);
  }
}
