import Phaser from "phaser";
import { MenuScene } from "@scenes";

const phaserConfig: Phaser.Types.Core.GameConfig = {
  pixelArt: true,
  type: Phaser.AUTO,
  scene: [MenuScene],
  width: window.innerWidth,
  height: window.innerHeight,
  title: "Project Milkshake",
  backgroundColor: "#cdcdcd",
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
