function startClassification(){

    Navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.audioClassify('https://teachablemachine.withgoogle.com/models/--Xx2NNXC/model.json', model_read);

}

function model_read(){

    console.log('Model ready');
    classifier.Classify(got_result);

}