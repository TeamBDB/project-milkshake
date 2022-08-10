import Phaser from "phaser";

import { BootScene, MenuScene, GameScene } from "@scenes";

const phaserConfig: Phaser.Types.Core.GameConfig = {
  pixelArt: true,
  type: Phaser.AUTO,
  scene: [BootScene, MenuScene, GameScene],
  width: window.innerWidth,
  height: window.innerHeight,
  title: "Project Milkshake",
  backgroundColor: "#333333",
  physics: {
    default: "matter",
    matter: {
      gravity: {
        y: 0,
      },
      debug: true,
    },
  },
};

export const phaserGame = new Phaser.Game(phaserConfig);
