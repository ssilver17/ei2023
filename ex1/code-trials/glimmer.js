let x = 50;
let y = 200;
let speed;



function setup() {
    createCanvas(1200, 1000);
}

function makeCircle() {
    noStroke();
    fill("#12eff7");
    ellipse(x, y, 100, 100);

    x = x + random(5);
    y = y + random(5);
} 

function draw() {
    background(0);

    noStroke();
    fill(0);
    rect(600, 0, 100, 1000);  //rect 7

    noStroke();
    fill(0);
    rect(900, 0, 100, 1000);  //rect 10

    makeCircle();

    noStroke();
    fill(0);
    rect(0, 0, 100, 1000); //rect 1

    noStroke();
    fill(0);
    rect(200, 0, 100, 1000);  //rect 3

    noStroke();
    fill(0);
    rect(400, 0, 100, 1000);  //rect 5
    

    noStroke();
    fill(0);
    rect(700, 0, 100, 1000);  //rect 8

    noStroke();
    fill(0);
    rect(1000, 0, 100, 1000);  //rect 11
}
