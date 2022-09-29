import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Oppositionbob from "./Oppositionbob/Oppositionbob.js";
import OppositionbobIcon from "./OppositionbobIcon/OppositionbobIcon.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Oppositionbob: new Oppositionbob({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 130,
    visible: true,
    layerOrder: 1
  }),
  OppositionbobIcon: new OppositionbobIcon({
    x: -157,
    y: 118,
    direction: 90,
    costumeNumber: 2,
    size: 70,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 64 // Set to 60 to make your project run faster
});
export default project;


// IGNORE//


if debugger Boolean = true then debugger = false