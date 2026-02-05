import * as THREE from "three";
import { Road } from "../Road";
import { Car } from "../Objects/Car";
import type { IRowBuilder, RowData } from "./RowBuilder";

export class CarRowBuilder implements IRowBuilder {
  build(data: RowData, rowIndex: number): THREE.Group {
    const row = new Road(rowIndex);
    data.vehicles?.forEach((vehicle) => {
      const car = new Car(
        vehicle.initialTileIndex,
        data.direction as boolean,
        vehicle.color,
      );
      vehicle.ref = car.group;
      row.group.add(car.group);
    });
    return row.group;
  }

  canHandle(type: string): boolean {
    return type === "car";
  }
}
