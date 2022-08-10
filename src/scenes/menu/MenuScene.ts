export class MenuScene extends Phaser.Scene {
  private logo?: Phaser.GameObjects.Image;
  private title?: Phaser.GameObjects.BitmapText;
  private pressToStart?: Phaser.GameObjects.BitmapText;

  constructor() {
    super("menu");
  }

  public create(): void {
    this.input.mouse.disableContextMenu();

    this.logo = this.add.image(
      window.innerWidth / 2,
      window.innerHeight / 2,
      "logo"
    );
    this.logo.setScale(8);
    this.logo.setAlpha(0);

    this.tweens.add({
      targets: this.logo,
      duration: 800,
      alpha: 1,
      y: this.logo.y + 50,
    });

    this.title = this.add.bitmapText(
      window.innerWidth / 2,
      window.innerHeight / 2 - 50,
      "arcade",
      "Project Milkshake",
      64
    );
    this.title.setAlpha(0);
    this.title.setX(window.innerWidth / 2 - this.title.width / 2);

    this.tweens.add({
      targets: this.title,
      duration: 800,
      alpha: 1,
      y: this.title.y - 100,
    });

    setTimeout(this.onTimeoutEnd.bind(this), 1200);
  }

  private onTimeoutEnd(): void {
    if (!this.logo) return;

    this.pressToStart = this.add.bitmapText(
      window.innerWidth / 2,
      this.logo.y + 200,
      "arcade",
      "Press any key to start",
      16
    );
    this.pressToStart.setAlpha(0);
    this.pressToStart.setX(window.innerWidth / 2 - this.pressToStart.width / 2);

    this.tweens.add({
      targets: this.pressToStart,
      duration: 800,
      alpha: 1,
    });

    this.input.on("pointerdown", this.startGame.bind(this));
    this.input.keyboard.on("keydown", this.startGame.bind(this));
  }

  private destroy(): void {
    this.logo?.destroy();
    this.title?.destroy();
    this.pressToStart?.destroy();
  }

  private startGame(): void {
    this.destroy();
    this.scene.start("game");
  }
}
