function preload(){

}

function setup(){
	canvas= createCanvas(400, 400);
	video= createCapture(VIDEO);
	video.size(400, 400);
	poseNet= ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw(){

}

function modelLoaded(){
	console.log("poseNet Is Initialized");
}

function gotPoses(){

}