/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _82FearfulEmojiPng extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "8-2-fearful-emoji-png",
        "./_82FearfulEmojiPng/costumes/8-2-fearful-emoji-png.png",
        { x: 240, y: 240 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "sademoj" },
        this.whenIReceiveSademoj
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "smileemoj" },
        this.whenIReceiveSmileemoj
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wrongAnswer" },
        this.whenIReceiveWronganswer
      )
    ];
  }

  *whenIReceiveSademoj() {
    this.visible = true;
    this.goto(172, 112);
  }

  *whenIReceiveSmileemoj() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveWronganswer() {
    this.visible = true;
  }
}
