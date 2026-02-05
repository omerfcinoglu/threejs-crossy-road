import * as THREE from "three";
import { Grass } from "./Grass";
import { Tree } from "./Objects/Tree";
import { Road } from "./Road";
import { Car } from "./Objects/Car";
import { Truck } from "./Objects/Truck";
import { metaData } from "../../Data";

export class Map {
  public group: THREE.Group;

  constructor() {
    this.group = new THREE.Group();
    this.init();
    this.addRow();
  }

  private init(): void {
    for (let i = 0; i > -5; i--) {
      const grass = new Grass(i);
      this.group.add(grass.group);
    }
  }

  private addRow(): void {
    metaData.forEach((data, index) => {
      if (data.type === "forest") {
        const row = new Grass(index + 1);
        data.trees?.forEach(({ tileIndex, height }) => {
          const tree = new Tree(tileIndex, height);
          row.group.add(tree.group);
        });
        this.group.add(row.group);
      }
      if (data.type === "car") {
        const row = new Road(index + 1);
        data.vehicles?.forEach((vehicle) => {
          const car = new Car(
            vehicle.initialTileIndex,
            data.direction,
            vehicle.color,
          );
          row.group.add(car.group);
        });
        this.group.add(row.group);
      }
      if (data.type === "truck") {
        const row = new Road(index + 1);
        data.vehicles?.forEach((vehicle) => {
          const truck = new Truck(
            vehicle.initialTileIndex,
            data.direction,
            vehicle.color,
          );
          row.group.add(truck.group);
        });
        this.group.add(row.group);
      }
    });
  }
}
