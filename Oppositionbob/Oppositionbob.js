/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Oppositionbob extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("idle", "./Oppositionbob/costumes/idle.png", {
        x: 249,
        y: 150
      }),
      new Costume("YELL2", "./Oppositionbob/costumes/YELL2.png", {
        x: 249,
        y: 150
      }),
      new Costume("YELL3", "./Oppositionbob/costumes/YELL3.png", {
        x: 249,
        y: 150
      }),
      new Costume("YELL", "./Oppositionbob/costumes/YELL.png", {
        x: 249,
        y: 150
      }),
      new Costume("YELL4", "./Oppositionbob/costumes/YELL4.png", {
        x: 249,
        y: 150
      })
    ];

    this.sounds = [
      new Sound(
        "bambi fantracks be like",
        "./Oppositionbob/sounds/bambi fantracks be like.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {}
}

//Hint to optimize a trash pc//
//Just press windows key/pc key, and key r (prompt/command key in macos) and type cmd or run or commandprompt, then type notepad in it, hit enter, in notepad you put a thing that is in BETA.. just type the following in notepad: FrameRateRefresh = 120 or RefreshRate = 120 @echo off and tap file, save it as, name it admin.bat or admin.sh dont use .sh its trash unless testing, and boom its in beta so may no work
