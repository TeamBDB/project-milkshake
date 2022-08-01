import { Player } from "@entities";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super("menu");
  }

  public preload(): void {
    this.load.spritesheet("steve", "/img/spritesheets/steve/idle.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  public create(): void {
    this.matter.world.setBounds(0, 0, window.innerWidth, window.innerHeight);

    const player = new Player({
      scene: this,
      x: 600,
      y: 370,
      key: "steve",
    });

    player.setScale(8);
  }
}
