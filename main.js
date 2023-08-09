tinput = "";


function preload()
{
    video = createCapture(VIDEO);
    video.hide();
}

function setup()
{
    canvas = createCanvas(721, 400);
    canvas.position(280, 177);
}

function draw()
{
    image(video, 0, 0, 721, 400);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    tinput = document.getElementById("Input").value;
    
}

function modelLoaded()
{
    console.log("Ready!");
}


