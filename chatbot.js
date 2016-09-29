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

   function randomNumberGeneratorForFallback(max,min) {
     return Math.floor((Math.random() * fallBackResponse.length));
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
   var j = input.search(/what is the meaning of life?/i);
   var k = input.search(/what are you?/);
  /*Keywords*/
   var g = input.search(/sad/i);
   var h = input.search(/good/i);
   var i = input.search(/fine/i);

   /*Random Responses*/
  var helloResponse = ["Hello there!", "Hi!", "Hola!", "Hello welcome to chat bot"];
   var nResponse = ["Im fine, how are you!", "Im doing swell, you?", "Im just a robot", "I have no feelings, you?"];
   var aResponse = ["I am what ever age you want", "I am a robot I have no age", "Age doesnt matter, how old are you?", "Im 25, you?"];
   var bResponse = ["My name is chatbot, what is yours?", "Me llamo es chatbot, y tu?", "Names don't matter", "Any name you prefer!"];
   var fResponse = ["I like many different songs, you?", "Im a fan of the pop genre, what about you?", "Im into rap music,  what about  you?", "Im not really a fan of music."];
   var jResponse = ["Whatever you want it to be.", "Everything", "Harambe could tell you, but he's not here anymore" ,"Be happy and help others be happy!:)"];

  /*Random responses for keywords*/

   var gResponse = ["Im sorry", "Why are you sad?", "I hope I can make you feel better", "Don't be sad"];
   var hResponse = ["Im glad", "what makes you happy?", "Great!", "Im also good!"];
   var iResponse = ["Glad to hear", "Im doing swell also", "Why?" , "Good thing your not sad"];

   /*FALLBACK ANSWERS*/
   var fallBackResponse = ["Cool!", "Why?" , "I dont understand", "Hey thats pretty good!", "Im sorry", "What?", "Please ask again" , "Wow!"]




   chatBox = document.getElementById("chat-area").innerHTML +=  "You: " + question;

/*Hello*/
   if(input == "hello" || input =="Hello" || input=="hi" || input == "Hi"){

     document.getElementById("chat-area").innerHTML +=  "ChatBot: " + helloResponse[randomNumberGenerator(0,3)] + "<br>";
   }
   /*how are you response*/

   else if(n > -1){

     document.getElementById("chat-area").innerHTML +=  "ChatBot: " + nResponse[randomNumberGenerator(0,3)] + "<br>";
   }
  /*How old areyou question*/
   else if(a > -1){
     document.getElementById("chat-area").innerHTML +=  "ChatBot: " + aResponse[randomNumberGenerator(0,3)] + "<br>";
   }

   /*What is your name question*/
   else if(b > -1){
    document.getElementById("chat-area").innerHTML +=  "ChatBot: " + bResponse[randomNumberGenerator(0,3)]  + "<br>";
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
 document.getElementById("chat-area").innerHTML += "ChatBot:" + fResponse[randomNumberGenerator(0,3)] + "<br>";

}
/*what is the meaning of life?*/
else if(j > -1){
 document.getElementById("chat-area").innerHTML += "ChatBot:" + jResponse[randomNumberGenerator(0,3)] + "<br>";

}
/*Triggering responses to different keywords*/

else if(g > -1){
 document.getElementById("chat-area").innerHTML += "ChatBot:" + gResponse[randomNumberGenerator(0,3)] + "<br>";

}

else if(h > -1){
 document.getElementById("chat-area").innerHTML += "ChatBot:" + hResponse[randomNumberGenerator(0,3)] + "<br>";

}

else if(i > -1){
 document.getElementById("chat-area").innerHTML += "ChatBot:" + iResponse[randomNumberGenerator(0,3)] + "<br>";

}

else{
    document.getElementById("chat-area").innerHTML +=  "ChatBot:" + fallBackResponse[randomNumberGeneratorForFallback(0,7)] + "<br>"
   }
   document.getElementById("input").value = null;
}

document.getElementById("input").addEventListener("keyup", function(event) {

  if (event.keyCode == 13) {
    document.getElementById("talkButton").click();
  }
});
