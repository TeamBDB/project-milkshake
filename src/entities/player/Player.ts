export class Player extends Phaser.Physics.Matter.Sprite {
  constructor(params: {
    scene: Phaser.Scene;
    x: number;
    y: number;
    key: string;
    frame?: number;
    options?: Phaser.Types.Physics.Matter.MatterBodyConfig;
  }) {
    const { scene, x, y, key, frame, options } = params;
    super(scene.matter.world, x, y, key, frame, options);
    scene.add.existing(this);
    scene.anims.create({
      key: "idle",
      frames: scene.anims.generateFrameNumbers("steve", { frames: [0, 1] }),
      frameRate: 3,
      repeat: -1,
    });

    this.scene = scene;
    this.setTexture(key);
    this.setPosition(x, y);
    this.setFrame(frame || 0);
    this.setBody("rectangle");

    this.play("idle");
  }
}
