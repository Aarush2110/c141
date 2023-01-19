X = "";
Y = "";
ScoreRight = "";

function setup() {
	canvas = createCanvas(800,400);
	canvas.parent('Canvas');


	video = createCapture(VIDEO);
	video.size(800,400);
	video.hide();
	video.parent('game_console');
	

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }


  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  noseX = results[0].pose.rightwrist.x;
	  noseY = results[0].pose.rightwrist.y;
	  console.log("RightWrist = " + X +", RightWrist = " + Y);
	}
  }
  
  function draw(){
	if(ScoreRight > 0.2){
		fill(225,0,0);
		stroke(255,255,255);
		circle(200,200,15);
	}
  }