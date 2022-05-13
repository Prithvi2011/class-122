x = 0;
y = 0;
draw_circle ="";
draw_rectangle ="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById('status').innerHTML="System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var event = event.results[0][0].transcript;

    document.getElementById('status').innerHTML = "The Speech has been recognized as: " + content;
    if(content == "circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById('status').innerHTML = " Started drawing circle ";
        draw_circle = "set";
    }
    if(content == "rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById('status').innerHTML = " Started drawing rectangle ";
        draw_rectangle = "set";
    }
}
  
function setup(){
Canvas = createCanvas(900, 600);
}

function draw(){
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100); 
        circle(x,y,radius);
        document.getElementById('status').innerHTML = "Circle is Drawn. ";
        draw_circle = "";
    }

    if (draw_rectangle == "set"){
        rectangle(x,y,radius);
        document.getElementById('status').innerHTML = "Rectangle is Drawn. ";
        draw_rectangle = "";
    }
}

 