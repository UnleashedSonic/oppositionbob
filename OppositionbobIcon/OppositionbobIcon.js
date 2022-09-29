/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class OppositionbobIcon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("icon", "./OppositionbobIcon/costumes/icon.png", {
        x: 225,
        y: 146
      }),
      new Costume("died", "./OppositionbobIcon/costumes/died.png", {
        x: 164,
        y: 134
      })
    ];

    this.sounds = [new Sound("pop", "./OppositionbobIcon/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed)
    ];
  }

  *whenKeySpacePressed() {
    yield* this.sayAndWait("HP: 5", 2);
    yield* this.playSoundUntilDone("pop");
    if (null) {
      yield* this.playSoundUntilDone("pop");
    } else {
      this.costume = "died";
    }
  }

  *whenKeyAPressed() {
    yield* this.sayAndWait("HP: 100", 2);
    yield* this.playSoundUntilDone("pop");
    if (null) {
      yield* this.playSoundUntilDone("pop");
    } else {
      this.costume = "icon";
    }
  }
}
