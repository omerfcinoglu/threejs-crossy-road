import * as THREE from "three";
import { MAP } from "../../../config/constants";
import { Wheel } from "./Wheel";

export class Car {
  group: THREE.Group;

  constructor(
    initialTileIndex: number,
    direction: boolean,
    color: THREE.ColorRepresentation,
  ) {
    this.group = new THREE.Group();

    this.group.position.x = initialTileIndex * MAP.tileSize;
    if (!direction) this.group.rotation.z = Math.PI;

    const main = new THREE.Mesh(
      new THREE.BoxGeometry(60, 30, 15),
      new THREE.MeshLambertMaterial({ color, flatShading: true }),
    );
    main.position.z = 12;
    this.group.add(main);

    const cabin = new THREE.Mesh(
      new THREE.BoxGeometry(33, 24, 12),
      new THREE.MeshLambertMaterial({ color: "white", flatShading: true }),
    );
    cabin.position.x = -6;
    cabin.position.z = 25.5;
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    this.group.add(cabin);

    const frontWheel = Wheel(18);
    this.group.add(frontWheel);

    const backWheel = Wheel(-18);
    this.group.add(backWheel);
  }
}
