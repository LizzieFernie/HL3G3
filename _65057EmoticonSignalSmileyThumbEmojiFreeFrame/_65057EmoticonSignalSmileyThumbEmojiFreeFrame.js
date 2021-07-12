/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _65057EmoticonSignalSmileyThumbEmojiFreeFrame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "65057-emoticon-signal-smiley-thumb-emoji-free-frame",
        "./_65057EmoticonSignalSmileyThumbEmojiFreeFrame/costumes/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png",
        { x: 413, y: 360 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "yay" }, this.whenIReceiveYay),
      new Trigger(
        Trigger.BROADCAST,
        { name: "rightAnswer" },
        this.whenIReceiveRightanswer
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "ctree" }, this.whenIReceiveCtree)
    ];
  }

  *whenIReceiveYay() {
    this.visible = true;
    this.goto(172, 112);
  }

  *whenIReceiveRightanswer() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCtree() {
    this.visible = false;
  }
}
