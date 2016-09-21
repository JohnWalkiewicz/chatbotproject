var question;
var chatBox;
var response;
var input;
function submitButton() {
   input =  document.getElementById("input").value;
   question = input + "<br>";


   chatBox = document.getElementById("chat-area").innerHTML +=  "Question: " + question;

   document.getElementById("input").value = null;

   if(input == "Hey dad"){
     document.getElementById("chat-area").innerHTML +=  "Response: " + "Hello there son" + "<br>";
   }
   else if(input == "how old are you?"){
     document.getElementById("chat-area").innerHTML +=  "Response: " + "I am a robot, I have no age" + "<br>";
   }
   else if(input == "what is your name?"){
    document.getElementById("chat-area").innerHTML +=  "Response:    You can call me H A R A M B E" + "<br>";
   }
}
