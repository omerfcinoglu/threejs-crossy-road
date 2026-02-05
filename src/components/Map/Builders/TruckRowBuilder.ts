import * as THREE from "three";
import { Road } from "../Road";
import { Truck } from "../Objects/Truck";
import type { IRowBuilder, RowData } from "./RowBuilder";

export class TruckRowBuilder implements IRowBuilder {
  build(data: RowData, rowIndex: number): THREE.Group {
    const row = new Road(rowIndex);
    data.vehicles?.forEach((vehicle) => {
      const truck = new Truck(
        vehicle.initialTileIndex,
        data.direction as boolean,
        vehicle.color,
      );
      vehicle.ref = truck.group;
      row.group.add(truck.group);
    });
    return row.group;
  }

  canHandle(type: string): boolean {
    return type === "truck";
  }
}
