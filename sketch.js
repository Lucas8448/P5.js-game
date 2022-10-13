

function setup() {
    createCanvas(1280, 640, WEBGL);
    background(0);
    //create camera

};

//grass block function
function grassBlock(x, y, z) {
    push();
    translate(x, y, z);
    fill(0,150,0);
    box(20, 20, 20);
    pop();
};

//dirt block function
function dirtBlock(x, y, z) {
    push();
    translate(x, y, z);
    fill(128, 64, 0);
    box(20, 20, 20);
    pop();
};

//stone block function
function stoneBlock(x, y, z) {
    push();
    translate(x, y, z);
    fill(128, 128, 128);
    box(20, 20, 20);
    pop();
};

//water block function
function waterBlock(x, y, z) {
    push();
    translate(x, y, z);
    fill(0, 0, 255);
    box(20, 20, 20);
    pop();
};



function draw() {
    background(0);
    orbitControl()
    //create 3d terrain using noise()
    for (var x = -100; x < 100; x++) {
        for (var z = -100; z  < 100; z++) {
            var y = noise(x * 0.015 + 10000, z * 0.015 + 10000) * 40;
            var y1 = noise(x * 0.1 + 10000000, z * 1+ 1000000);
            y = y + y1
            if (y < 10) {
                strokeWeight(4)
                stoneBlock(x * 20, Math.round(y) * 20 + 40, z * 20);
            } else if (y < 20) {
                strokeWeight(2)
                grassBlock(x * 20, Math.round(y) * 20 + 40, z * 20);
            } else {
                strokeWeight(0)
                waterBlock(x * 20, 20 * 20 + 40, z * 20);
            }
        }
    }
}
