import { Player, Loading } from "@entities";

export class GameScene extends Phaser.Scene {
  private loading: Loading;

  constructor() {
    super("game");
    this.loading = new Loading({
      scene: this,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
  }

  public preload(): void {
    this.loading.create();

    this.load.on("progress", this.loading.onLoadProgress.bind(this.loading));
    this.load.on("complete", this.loading.onLoadComplete.bind(this.loading));
    this.load.on(
      "fileprogress",
      this.loading.onFileProgress.bind(this.loading)
    );

    this.load.spritesheet("steve", "/img/spritesheets/steve/idle.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  public create(): void {
    const player = new Player({
      scene: this,
      key: "steve",
    });

    player.setScale(8);
    player.setPosition(
      window.innerWidth / 2 - player.width / 2,
      window.innerHeight / 2 - player.height / 2
    );
  }
}
