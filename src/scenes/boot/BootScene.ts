import { Loading } from "@entities";

export class BootScene extends Phaser.Scene {
  private loading: Loading;

  constructor() {
    super("boot");
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

    this.load.image("logo", "/img/logo.png");
    this.load.bitmapFont("arcade", "/fonts/arcade.png", "/fonts/arcade.xml");

    // @todo: this is for visual testing only
    for (let index = 0; index < 1000; index++) {
      this.load.image(`test_${index}`, "/img/logo.png");
    }
  }

  public create(): void {
    this.scene.start("menu");
  }
}
