import * as THREE from "three";
import { Grass } from "../Grass";
import { Tree } from "../Objects/Tree";
import type { IRowBuilder, RowData } from "./RowBuilder";

export class ForestRowBuilder implements IRowBuilder {
  build(data: RowData, rowIndex: number): THREE.Group {
    const row = new Grass(rowIndex);
    data.trees?.forEach(({ tileIndex, height }) => {
      const tree = new Tree(tileIndex, height);
      row.group.add(tree.group);
    });
    return row.group;
  }

  canHandle(type: string): boolean {
    return type === "forest";
  }
}
