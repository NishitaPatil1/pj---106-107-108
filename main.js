function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1z3AkUlcC/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
   if(error){
    console.error(error);
   }
   else{
    console.log(results);
    random_r=Math.floor(Math.random()*255)+1;
    random_g=Math.floor(Math.random()*255)+1;
    random_b=Math.floor(Math.random()*255)+1;
   document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
   document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

    img1=document.getElementById("cat");
    img2=document.getElementById("cow");
    img3=document.getElementById("dog");
    img4=document.getElementById("horse");

    if(results[0].label == "Meowing"){
        img1.src="cat.gif";
        img2.src="cow.png";
        img3.src="dog.png";
        img4.src="horse.png";
    }
    else if(results[0].label == "Mooing"){
        img1.src="cat.png";
        img2.src="cow.gif";
        img3.src="dog.png";
        img4.src="horse.png";
    }
    else if(results[0].label == "Barking"){
        img1.src="cat.png";
        img2.src="cow.png";
        img3.src="dog.gif";
        img4.src="horse.png";
    }
    else{
        img1.src="cat.png";
        img2.src="cow.png";
        img3.src="dog.png";
        img4.src="horse.gif"; 
    }

    }
}
