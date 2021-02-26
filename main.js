function play1(){
    document.getElementById("music").play();
}

Webcam.set({
    width:350 ,
    height:300 ,
    image_format:'png' ,
    png_quality:90
});

cam = document.getElementById("camera");
Webcam.attach(cam);

function capture(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = "<img id='selfie' src='"+data_url+"'>";
    });
}

console.log("Ml5 Version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a-Iv6W-6Z/model.json',modelloaded);

function modelloaded(){
    console.log("Model Loaded");
}

function check(){
    image = document.getElementById("selfie");
    classifier.classify(image , gotresult);
}

function gotresult(error , result){
    if(error){
        console.error(error);
    }
    else {
        console.log(result);
    }
    document.getElementById("obj_name").innerHTML = result[0].label;
    document.getElementById("acc").innerHTML = result[0].confidence.toFixed(3);
}