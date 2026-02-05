import { MAP } from "../config/constants";
import * as THREE from "three";
import { metaData } from "../Data";

const clock = new THREE.Clock();

class VehiclesManager {
  constructor() {
    console.log("VehiclesManager initialized");
  }

  Move(): void {
    const delta = clock.getDelta();
    metaData.forEach((rowData) => {
      if (rowData.type === "car" || rowData.type === "truck") {
        const beginningOfRow = (MAP.minTileIndex - 2) * MAP.tileSize;
        const endOfRow = (MAP.maxTileIndex + 2) * MAP.tileSize;

        rowData.vehicles.forEach(({ ref }) => {
          if (!ref) throw new Error("Vehicle reference is missing");

          if (rowData.direction) {
            ref.position.x =
              ref.position.x > endOfRow
                ? beginningOfRow
                : ref.position.x + rowData.speed * delta * 50;
          } else {
            ref.position.x =
              ref.position.x < beginningOfRow
                ? endOfRow
                : ref.position.x - rowData.speed * delta * 50;
          }
        });
      }
    });
  }
}

export default VehiclesManager;
