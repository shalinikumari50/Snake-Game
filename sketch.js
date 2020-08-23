let s;
let scl = 20;
let food;
let width = 600;
let height = 600;

function setup(){
	createCanvas(600,600);
        s = new Snake();
        frameRate(5);
        foodLocation();

}


function foodLocation(){
        let cols = floor(width / scl);
        let rows = floor(height / scl);
        food = createVector(floor(random(cols)), floor(random(rows)));
        food.mult(scl);

}
function draw(){
        background(158,199,12);
        if(s.eat(food)){
                foodLocation();
        }
	s.update();
        s.show();
        s.death();
        rect(food.x, food.y, scl, scl);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
            s.dir(0, -1);
	}else if(keyCode ===DOWN_ARROW){
            s.dir(0,1);
    }else if(keyCode === RIGHT_ARROW){
            s.dir(1,0);
    }else if(keyCode === LEFT_ARROW){
            s.dir(-1,0);

    }


}