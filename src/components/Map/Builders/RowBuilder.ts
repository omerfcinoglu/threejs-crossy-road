import * as THREE from "three";

export interface RowData {
  type: string;
  trees?: { tileIndex: number; height: number }[];
  vehicles?: any[];
  direction?: boolean;
}

export interface IRowBuilder {
  build(data: RowData, rowIndex: number): THREE.Group;
  canHandle(type: string): boolean;
}
