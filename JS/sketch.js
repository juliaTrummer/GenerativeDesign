const sketch = (p) => {
    let x = 50;
    let y = 50;

    p.setup = () => {
        p.createCanvas(400, 400);
        p.background(220);
    };

    p.draw = () => {
        p.fill(255, 0, 0);
        p.ellipse(x, y, 50, 50);

        x += 1;
        if (x > p.width) {
            x = 0;
        }
    };
};

new p5(sketch);