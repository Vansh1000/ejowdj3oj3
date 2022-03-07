video = "";
status = "";

function setup(){
    canvas = createCanvas(480 , 380 );
    canvas.position( 500 , 375);
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();


}


function starta(){
objectDetector = ml5.objectDetector("cocossd" , modelLoaded)
document.getElementById("status").innerHTML = "Status: wait ok? because objects are BEING detected";

}

function modelLoaded(){
console.log("done kk");
status = true;
video.loop(); //ok ?
video.speed(1); //ha speed is 1?// 
video.volume(0);//ha 0 vallueneoij

}


function draw(){
image(video, 0, 0, 480, 380)
}
