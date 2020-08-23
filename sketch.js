let s;
let scl = 20;
let food;


function setup(){
	createCanvas(800,800);
	s = new Snake();

}

function draw(){
	background(72,66,245);
	s.update();
	s.show();
    frameRate(4);

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