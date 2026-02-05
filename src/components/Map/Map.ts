import * as THREE from "three";
import { Grass } from "./Grass";
import { Tree } from "./Objects/Tree";
import { Road } from "./Road";
import { Car } from "./Objects/Car";

const metaData = [
  {
    type: "forest",
    trees: [
      { tileIndex: 0, height: 1 },
      { tileIndex: 1, height: 2 },
      { tileIndex: 2, height: 3 },
      { tileIndex: 3, height: 4 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 2,
    vehicles: [
      {
        initialTileIndex: -2,
        color: 0xff0000,
      },
    ],
  },
];

export class Map {
  public group: THREE.Group;

  constructor() {
    this.group = new THREE.Group();
    this.init();
    this.addRow();
  }

  private init(): void {
    const grass = new Grass(0);
    this.group.add(grass.group);
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
    });
  }
}
