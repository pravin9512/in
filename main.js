function preload(){

}

function setup(){
canvas=createCanvas(640,480);
canvas.position(320,240);
video=createCapture(VIDEO)
video.hide()
}

function draw(){
image(video,0,0,640,480);

// circle
fill(color(66, 135, 245));
strokeWeight(2);
stroke(color(255,255,255));
circle(590, 450, 70);

// circle
fill(color(66, 135, 245));
strokeWeight(2);
stroke(color(255,255,255));
circle(590, 60, 70);

// circle
fill(color(66, 135, 245));
strokeWeight(2);
stroke(color(255,255,255));
circle(50, 450, 70);

// circle
fill(color(66, 135, 245));
strokeWeight(2);
stroke(color(255,255,255));
circle(50, 60, 70);

// rectangle
fill(color(20, 206, 10));
strokeWeight(2);
stroke(color(255,255,255));
rect(87,30,470 , 55);

// rectangle
fill(color(20, 206, 10));
strokeWeight(2);
stroke(color(255,255,255));
rect(87,420,470 , 55);

// rectangle
fill(color(20, 206, 10));
strokeWeight(2);
stroke(color(255,255,255));
rect(567,97,55 , 317);

// rectangle
fill(color(20, 206, 10));
strokeWeight(2);
stroke(color(255,255,255));
rect(20,97,55 , 317);

}

function take_snapshot(){
    save("pic.png")
}


