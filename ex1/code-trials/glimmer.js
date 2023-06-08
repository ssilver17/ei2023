let shape1;
let speed;



function setup() {
    createCanvas(1200, 800);
    shape1 = new Shape();
    speed = random(1, 10);
   
}

function draw() {
    background("#15414e");

    noStroke();
    fill(220);
    rect(600, 0, 100, 1000);  //rect 7

    noStroke();
    fill(0);
    rect(900, 0, 100, 1000);  //rect 10

    shape1.move();
    shape1.show();

    noStroke();
    fill(0);
    rect(700, 0, 100, 1000);  //rect 8

    noStroke();
    fill(220);
    rect(1000, 0, 100, 1000);  //rect 11
}

class Shape {
    constructor() {
        this.x = 150;
        this.y = 300;  
    }
    move() {
        this.x = this.x += speed;
     
    }

    show() {
        stroke("#12eff7");
        strokeWeight(5);
        noFill();
        ellipse(this.x, this.y, 100, 100);
        
    }
}    