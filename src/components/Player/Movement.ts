import { player } from "./Player";

export interface Move {
  execute(): void;
}

export class MoveUp implements Move {
  execute(): void {
    player.body.position.y += 5;
  }
}

export class MoveDown implements Move {
  execute(): void {
    player.body.position.y -= 5;
  }
}

export class MoveLeft implements Move {
  execute(): void {
    player.body.position.x -= 5;
  }
}

export class MoveRight implements Move {
  execute(): void {
    player.body.position.x += 5;
  }
}

export class Movement {
  private readonly movesQueue: Move[] = [];
  private readonly keysPressed: Set<string> = new Set();

  constructor() {
    this.setupKeyboardListeners();
  }

  private setupKeyboardListeners(): void {
    document.addEventListener("keydown", (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        this.keysPressed.add(e.key);
      }
    });
  }

  public processQueue(): void {
    if (this.keysPressed.size === 0) return;

    let move: Move | null = null;

    if (this.keysPressed.has("ArrowUp")) {
      move = new MoveUp();
      this.keysPressed.delete("ArrowUp");
    } else if (this.keysPressed.has("ArrowDown")) {
      move = new MoveDown();
      this.keysPressed.delete("ArrowDown");
    } else if (this.keysPressed.has("ArrowLeft")) {
      move = new MoveLeft();
      this.keysPressed.delete("ArrowLeft");
    } else if (this.keysPressed.has("ArrowRight")) {
      move = new MoveRight();
      this.keysPressed.delete("ArrowRight");
    }

    if (move) {
      this.movesQueue.push(move);
      this.executeNextMove();
    }
  }

  private executeNextMove(): void {
    if (this.movesQueue.length > 0) {
      const move = this.movesQueue.shift();
      move?.execute();
    }
  }
}
