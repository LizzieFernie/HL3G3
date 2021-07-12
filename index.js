import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Girlh from "./Girlh/Girlh.js";
import LeftStick from "./LeftStick/LeftStick.js";
import RightHand from "./RightHand/RightHand.js";
import Hat from "./Hat/Hat.js";
import Scarf from "./Scarf/Scarf.js";
import Snowmanface from "./Snowmanface/Snowmanface.js";
import Bellyf from "./Bellyf/Bellyf.js";
import LeftStick2 from "./LeftStick2/LeftStick2.js";
import RightHand2 from "./RightHand2/RightHand2.js";
import Hat2 from "./Hat2/Hat2.js";
import Scarf2 from "./Scarf2/Scarf2.js";
import Snowmanface2 from "./Snowmanface2/Snowmanface2.js";
import Bellyf2 from "./Bellyf2/Bellyf2.js";
import _82FearfulEmojiPng from "./_82FearfulEmojiPng/_82FearfulEmojiPng.js";
import _22GrinningFaceEmojiPng from "./_22GrinningFaceEmojiPng/_22GrinningFaceEmojiPng.js";
import _65057EmoticonSignalSmileyThumbEmojiFreeFrame from "./_65057EmoticonSignalSmileyThumbEmojiFreeFrame/_65057EmoticonSignalSmileyThumbEmojiFreeFrame.js";
import Button from "./Button/Button.js";
import Ctree from "./Ctree/Ctree.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Next from "./Next/Next.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Girlh: new Girlh({
    x: 75,
    y: 144,
    direction: 90,
    costumeNumber: 1,
    size: 24,
    visible: false,
    layerOrder: 24
  }),
  LeftStick: new LeftStick({
    x: 134,
    y: -101,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 4
  }),
  RightHand: new RightHand({
    x: 219,
    y: -106,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 5
  }),
  Hat: new Hat({
    x: 181,
    y: -25,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 6
  }),
  Scarf: new Scarf({
    x: 184,
    y: -106,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 2
  }),
  Snowmanface: new Snowmanface({
    x: 177,
    y: -67,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 3
  }),
  Bellyf: new Bellyf({
    x: 177,
    y: -138,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 1
  }),
  LeftStick2: new LeftStick2({
    x: -209.17930223454852,
    y: -144.4219755089082,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 12
  }),
  RightHand2: new RightHand2({
    x: 26.750338104495714,
    y: 131.90230352714943,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 7
  }),
  Hat2: new Hat2({
    x: -86.93217333481613,
    y: -30.78973317260806,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 10
  }),
  Scarf2: new Scarf2({
    x: -146.78147232006629,
    y: 80.62422459242771,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 11
  }),
  Snowmanface2: new Snowmanface2({
    x: 24.554718048129423,
    y: -88.27759988199989,
    direction: 90,
    costumeNumber: 1,
    size: 13,
    visible: false,
    layerOrder: 8
  }),
  Bellyf2: new Bellyf2({
    x: 24.613857758046066,
    y: 84.46335464676164,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 9
  }),
  _82FearfulEmojiPng: new _82FearfulEmojiPng({
    x: 172,
    y: 112,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 14
  }),
  _22GrinningFaceEmojiPng: new _22GrinningFaceEmojiPng({
    x: 172,
    y: 112,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 13
  }),
  _65057EmoticonSignalSmileyThumbEmojiFreeFrame: new _65057EmoticonSignalSmileyThumbEmojiFreeFrame(
    {
      x: 172,
      y: 112,
      direction: 90,
      costumeNumber: 1,
      size: 25,
      visible: false,
      layerOrder: 15
    }
  ),
  Button: new Button({
    x: 178,
    y: -137,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 16
  }),
  Ctree: new Ctree({
    x: 0,
    y: -1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Sprite1: new Sprite1({
    x: 34,
    y: -30,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  Sprite2: new Sprite2({
    x: -25,
    y: 69,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 25
  }),
  Sprite3: new Sprite3({
    x: 34,
    y: -30,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Sprite4: new Sprite4({
    x: 34,
    y: -30,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Sprite5: new Sprite5({
    x: 34,
    y: -30,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 18
  }),
  Sprite6: new Sprite6({
    x: 29,
    y: 23,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  Sprite7: new Sprite7({
    x: 29,
    y: 23,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  Next: new Next({
    x: 177,
    y: -148,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 26
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
