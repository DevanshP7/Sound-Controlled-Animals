function startClassification(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/--Xx2NNXC/model.json', modelread);

}

function modelread(){

    console.log('Model ready');
    classifier.classify(got_result);

}

dog = 0;
cat = 0;

function got_result(error, results){

    if(error){

        console.error(error);

    }else{

        console.log(results);

        red = Math.floor(Math.random()*255)+1;
        green = Math.floor(Math.random()*255)+1;
        blue = Math.floor(Math.random()*255)+1;

        document.getElementById("accuracy").innerHTML = 'Detected Dog: ' + dog + ', Detected Cat: ' + cat;
        document.getElementById("sound").innerHTML = results[0].label;
        document.getElementById("accuracy").style.color = 'rgba('+red+','+green+','+blue+');';
        document.getElementById("sound").style.color = 'rgba('+red+','+green+','+blue+');';

        gif_tag = document.getElementById("gif");

        if(results[0].label == 'Bark'){

            gif_tag.src = "i_barking.gif";
            dog = dog + 1;

        }else if(results[0].label == 'Meow'){

            gif_tag.src = "i_meowing.gif";
            cat = cat + 1;

        }else{

            gif_tag.src = "i_listening.gif";

        }

    }
    
}