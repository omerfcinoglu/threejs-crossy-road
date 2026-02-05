import type { RowData } from "./types";

export const metaData: RowData[] = [
  {
    type: "forest",
    trees: [
      { tileIndex: -1, height: 2 },
      { tileIndex: 0, height: 4 },
      { tileIndex: 2, height: 1 },
      { tileIndex: 4, height: 3 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 3,
    vehicles: [
      { initialTileIndex: -3, color: 0x3498db, ref: undefined },
      { initialTileIndex: 1, color: 0xe74c3c, ref: undefined },
      { initialTileIndex: 5, color: 0xf1c40f, ref: undefined },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -2, height: 1 },
      { tileIndex: 1, height: 3 },
      { tileIndex: 3, height: 2 },
    ],
  },
  {
    type: "truck",
    direction: false,
    speed: 2,
    vehicles: [
      { initialTileIndex: -4, color: 0x2ecc71, ref: undefined },
      { initialTileIndex: 2, color: 0x9b59b6, ref: undefined },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 4,
    vehicles: [
      { initialTileIndex: 0, color: 0x1abc9c, ref: undefined },
      { initialTileIndex: 4, color: 0xff8800, ref: undefined },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 4 },
      { tileIndex: -1, height: 2 },
      { tileIndex: 2, height: 5 },
      { tileIndex: 5, height: 1 },
    ],
  },
];
