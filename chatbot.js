var question;
var chatBox;
var response;
var input;
function submitButton() {
   input =  document.getElementById("input").value;
   question = input + "<br>";

//*Variables for all the Questions/responses*//

   var n = input.search(/how are you?/i);
   var a = input.search(/how old are you?/i);
   var b = input.search(/what is your name?/i);
   var c = input.search(/what time is it?/i);


   chatBox = document.getElementById("chat-area").innerHTML +=  "You: " + question;


   if(input == "hello" || input =="Hello" || input=="hi" || input == "Hi"){
     document.getElementById("chat-area").innerHTML +=  "Harambe: " + "Hello there! nice to meet you" + "<br>";
   }
   /*how are you response*/

   else if(n > -1){
     document.getElementById("chat-area").innerHTML +=  "Harambe: " + "Im fine, how are you?" + "<br>";
   }
  /*How old areyou question*/
   else if(a > -1){
     document.getElementById("chat-area").innerHTML +=  "Harambe: " + "I am a robot, I have no age" + "<br>";
   }

   /*What is your name question*/
   else if(b > -1){
    document.getElementById("chat-area").innerHTML +=  "Harambe:    You can call me H A R A M B E" + "<br>";
  }

  /*What is the time question*/
  else if(c > -1){
   document.getElementById("chat-area").innerHTML += "Harambe:    You can call me H A R A M B E" + "<br>";
 }

   else{
    document.getElementById("chat-area").innerHTML +=  "Harambe:    You can call me H A R A M B E" + "<br>"
   }
   document.getElementById("input").value = null;
}
