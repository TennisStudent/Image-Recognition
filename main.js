Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("webcam");

Webcam.attach(camera);

function capturephoto()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="photo_final" src="'+data_uri+'"/>'
    });
}
    console.log('ml5 version: ', ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2HWDQ5kak/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model is loaded: ");
}

function check(){
    img = document.getElementById("photo_final")
    classifier.classify(img, gotResult)
}
function gotResult(error,result){
    if(error) {
        console.error(error);
    }
    else {
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);

        console.log(result);
    }
}

