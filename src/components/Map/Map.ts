import * as THREE from "three";
import { Grass } from "./Grass";
import { metaData } from "../../Data";
import type { IRowBuilder } from "./Builders/RowBuilder";
import { ForestRowBuilder } from "./Builders/ForestRowBuilder";
import { CarRowBuilder } from "./Builders/CarRowBuilder";
import { TruckRowBuilder } from "./Builders/TruckRowBuilder";

export class Map {
  public group: THREE.Group;
  private readonly rowBuilders: IRowBuilder[];

  constructor() {
    this.group = new THREE.Group();
    this.rowBuilders = [
      new ForestRowBuilder(),
      new CarRowBuilder(),
      new TruckRowBuilder(),
    ];
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
      const builder = this.rowBuilders.find((b) => b.canHandle(data.type));
      if (builder) {
        const row = builder.build(data, index + 1);
        this.group.add(row);
      }
    });
  }
}
