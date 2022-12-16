function preload() {
    classifier=ml5.imageClassifier("DoodleNet");
}
function setup() {
    canvas=createCanvas(280,280);
    canvas.position(520,300);
    background("white");
    synth=window.speechSynthesis;
    canvas.mouseReleased(classifyr);
}
function clear_canvas() {
    background("white");
    console.log("cleasoh")
}
function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
 function classifyr() {
    classifier.classify(canvas,GotResult);
 }
 function GotResult(error,results) {
if (error) {
console.error(error)
}else{
    console.log(results);
    document.getElementById("lab").innerHTML=" Label : "+results[0].label;
    document.getElementById("con").innerHTML="Confidence : "+Math.round(results[0].confidence)*100+"%";
    utterthis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);

}

 }