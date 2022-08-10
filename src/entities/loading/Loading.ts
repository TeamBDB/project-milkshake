export class Loading {
  private center: {
    x: number;
    y: number;
  };
  private scene: Phaser.Scene;
  private progress?: {
    bar: Phaser.GameObjects.Graphics;
    box: Phaser.GameObjects.Graphics;
  };
  private text?: {
    asset: Phaser.GameObjects.Text;
    loading: Phaser.GameObjects.Text;
    percent: Phaser.GameObjects.Text;
  };

  constructor(params: {
    scene: Phaser.Scene;
    x: number;
    y: number;
    options?: {};
  }) {
    const { scene, x, y } = params;
    this.scene = scene;
    this.center = { x, y };
  }

  public create(): void {
    this.progress = {
      bar: this.scene.add.graphics(),
      box: this.scene.add.graphics(),
    };

    this.progress.box.fillStyle(0x222222, 0.8);
    this.progress.box.fillRect(
      this.center.x - 160,
      this.center.y - 25,
      320,
      50
    );

    this.text = {
      loading: this.scene.make.text({
        x: this.center.x,
        y: this.center.y - 50,
        text: "Loading...",
        style: {
          font: "20px monospace",
          color: "#ffffff",
        },
      }),
      percent: this.scene.make.text({
        x: this.center.x,
        y: this.center.y - 5,
        text: "0%",
        style: {
          font: "18px monospace",
          color: "#ffffff",
        },
      }),
      asset: this.scene.make.text({
        x: this.center.x,
        y: this.center.y + 50,
        text: "",
        style: {
          font: "18px monospace",
          color: "#ffffff",
        },
      }),
    };

    this.text.loading.setOrigin(0.5, 0.5);
    this.text.percent.setOrigin(0.5, 0.5);
    this.text.asset.setOrigin(0.5, 0.5);
  }

  public onLoadProgress(value: number): void {
    this.text?.percent.setText((value * 100).toFixed(2) + "%");
    this.progress?.bar.clear();
    this.progress?.bar.fillStyle(0xffffff, 1);
    this.progress?.bar.fillRect(
      this.center.x - 150,
      this.center.y - 15,
      300 * value,
      30
    );
  }

  public onFileProgress(file: { key: string }): void {
    this.text?.asset.setText("Loading asset: " + file.key);
  }

  public onLoadComplete(): void {
    this.destroy();
  }

  public destroy(): void {
    this.progress?.bar.destroy();
    this.progress?.box.destroy();
    this.text?.loading.destroy();
    this.text?.percent.destroy();
    this.text?.asset.destroy();
  }
}
