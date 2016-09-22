var question;
var chatBox;
var response;
var input;
function submitButton() {
   input =  document.getElementById("input").value;
   question = input + "<br>";

//*Variables for all the Questions/responses*//

   var n = input.search(/how are you/i);


   chatBox = document.getElementById("chat-area").innerHTML +=  "Question: " + question;

   document.getElementById("input").value = null;

   if(input == "hello" || input =="Hello"){
     document.getElementById("chat-area").innerHTML +=  "Response: " + "Hello there! nice to meet you" + "<br>";
   }
   /*how are you response*/

   /*else if(n == -1){
     document.getElementById("chat-area").innerHTML +=  "Response: " + "Im fine, how are you?" + "<br>";
   }
   else if(n > -1){
     document.getElementById("chat-area").innerHTML +=  "Response: Im fine, how are  you?" + "" + "<br>";
   }
  /*How old are you question*/

   else if(input == "how old are you?"){
     document.getElementById("chat-area").innerHTML +=  "Response: " + "I am a robot, I have no age" + "<br>";
   }

   /*What is your name question*/
   else if(input == "what is your name?" && "What is your name?"){
    document.getElementById("chat-area").innerHTML +=  "Response:    You can call me H A R A M B E" + "<br>";
   }

   else{
    document.getElementById("chat-area").innerHTML +=  "Response:  I dont think I got that, please try again." + "<br>";
   }
}
