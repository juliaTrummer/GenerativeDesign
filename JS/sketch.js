class Sketch {
    constructor() {

    }
}

export default Sketch;

import {createSketch} from "node-p5";

var canvas; 
function sketch(p) {
    p.setup = () => {
        canvas = p.createCanvas(200, 200);
        canvas.position(0,0);
    }
    p.draw = () => {
        p.background(50);
        p.text('hello world!', 50, 100);
    }
}

let p5Instance = createSketch(sketch);