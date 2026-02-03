const tilesCount = 8;

export const MAP = {
  minTileIndex: -1 * tilesCount,
  maxTileIndex: tilesCount,
  tilesPerRow: tilesCount * 2 + 1,
  tileSize: 42,
} as const;
