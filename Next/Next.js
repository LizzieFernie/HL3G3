/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Next extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("next", "./Next/costumes/next.svg", { x: 160, y: 55 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "ctree" }, this.whenIReceiveCtree),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    window.location.href = "https://lizziefernie.github.io/HL3G3/dash.html";
  }

  *whenIReceiveCtree() {
    this.goto(177, -148);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
