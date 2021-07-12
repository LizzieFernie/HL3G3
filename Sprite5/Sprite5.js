/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 179.5,
        y: 49.19998500000003
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "question" },
        this.whenIReceiveQuestion
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveQuestion() {
    this.goto(34, -30);
    this.visible = true;
    yield* this.wait(2);
    this.visible = false;
    yield* this.askAndWait("");
    if (this.answer == "CHRISTMAS TREE" || this.answer == "christmas tree") {
      this.broadcast("rightAnswer");
    } else {
      this.broadcast("wrongAnswer");
    }
  }
}
