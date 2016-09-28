var question;
var chatBox;
var response;
var input;

function submitButton() {
   input =  document.getElementById("input").value;
   question = input + "<br>";

   /*Randon number generator*/

   function randomNumberGenerator(max,min) {
     return Math.floor((Math.random() * helloResponse.length));
   }

/*Enter key*/


//*Variables for all the Questions/responses*//



   var n = input.search(/how are you?/i);
   var a = input.search(/how old are you?/i);
   var b = input.search(/what is your name?/i);
   /*Time*/
   var c = input.search(/what time is it?/i);
   var c1 = input.search(/what day is it?/i);
   var c2 = input.search(/what year is it?/i);
   var c3 = input.search(/what is the time?/i);
   var c4 = input.search(/what month is it?/i);

   var d = input.search(/hey thats pretty good/i);
   var e = input.search(/show me a picture/i);
   var f = input.search(/what is your favorite song?/i);

   /*Random Responses*/
  var helloResponse = ["Hello there!", "Hi!", "Hola!", "Hello welcome to chat bot"];
   var nResponse = ["Im fine, how are you!", "Im doing swell, you?", "Im just a robot"];
   var aResponse =



   chatBox = document.getElementById("chat-area").innerHTML +=  "You: " + question;

/*Hello*/
   if(input == "hello" || input =="Hello" || input=="hi" || input == "Hi"){

     document.getElementById("chat-area").innerHTML +=  "ChatBot: " + helloResponse[randomNumberGenerator(0,3)] + "<br>";
   }
   /*how are you response*/

   else if(n > -1){

     document.getElementById("chat-area").innerHTML +=  "ChatBot: " + nResponse[randomNumberGenerator(0,2)] + "<br>";
   }
  /*How old areyou question*/
   else if(a > -1){
     document.getElementById("chat-area").innerHTML +=  "ChatBot: " + "I am a robot, I have no age" + "<br>";
   }

   /*What is your name question*/
   else if(b > -1){
    document.getElementById("chat-area").innerHTML +=  "ChatBot:    You can call me H A R A M B E" + "<br>";
  }

  /*What is the time question*/
  else if(c > -1 || c1 > -1 || c2 > -1 || c3 > -1 || c4 > -1){
   document.getElementById("chat-area").innerHTML += "ChatBot: " + Date() + "<br>";
 }

 /**/

 /*M E M E S*/
 else if(d > -1){
  document.getElementById("chat-area").innerHTML += "ChatBot:    Nice meme haHAA" + "<br>";

}

/*show me a picture*/
else if(e > -1){
 var x = document.createElement("IMG");
 x.setAttribute("src","http://feelgrafix.com/data/pictures/pictures-2.jpg");
 x.setAttribute("width",  "150");
 x.setAttribute("width",  "150");
 x.setAttribute("alt", "ChatBot");
 document.getElementById("chat-area").innerHTML += "ChatBot: ";
 document.getElementById("chat-area").appendChild(x);
 document.getElementById("chat-area").innerHTML += "<br>";
}
/*whats your favorite song*/
else if(f > -1){
 document.getElementById("chat-area").innerHTML += "ChatBot:    I like many different songs!" + "<br>";
 audio2.play();
}




   else{
    document.getElementById("chat-area").innerHTML +=  "ChatBot:    Thats cool!" + "<br>"
   }
   document.getElementById("input").value = null;
}

document.getElementById("input").addEventListener("keyup", function(event) {

  if (event.keyCode == 13) {
    document.getElementById("talkButton").click();
  }
});
