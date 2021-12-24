sound=""
rightwristX=0
rightwristY=0
leftwristX=0
leftwristY=0
 document.getElementById("function_stop").style.display="none"

function preload(){
    sound=loadSound("Party On My Mind - Race 2 - Saif Ali, John, Deeepika, Jacqueline & Amisha - Pritam - Honey Singh.mp3")
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()

    poseNET=ml5.poseNet(video,modelloaded)
    poseNET.on("pose",gotpose)
}
function modelloaded(){
    console.log("modelloaded")
}

function gotpose(result){
    console.log(result)
    rightwristX=result[0].pose.rightWrist.x
    rightwristY=result[0].pose.rightWrist.y
    leftwristX=result[0].pose.leftWrist.x
    leftwristY=result[0].pose.leftWrist.y


  

    
}

function draw(){
    image(video,0,0,500,500)
}

function play_sound(){
    sound.play();
    sound.setVolume(1)
    sound.rate(1)
    document.getElementById("function_stop").style.display="block"
    document.getElementById("function_play").style.display="none"
}
function  stop(){
    sound.stop()
    document.getElementById("function_stop").style.display="none"
    document.getElementById("function_play").style.display="block"
}