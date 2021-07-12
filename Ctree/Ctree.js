/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ctree extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ctree", "./Ctree/costumes/ctree.svg", {
        x: 238.99999999999986,
        y: 179.4935794542536
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "finalemoj" },
        this.whenIReceiveFinalemoj
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveFinalemoj() {
    this.visible = true;
    yield* this.playSoundUntilDone("Win");
    this.audioEffects.pitch += 10;
    this.visible = false;
  }
}
