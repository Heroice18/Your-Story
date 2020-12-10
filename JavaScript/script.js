// source code:  https://github.com/cometchat-pro-tutorials/jquery-chat-app
$(document).ready(function() {
   chatService.fetchMessages();
   

   $('#message-form').submit(function(e) {    
    
        console.log("1");
    e.preventDefault();
    if (profanityCheck() == false) {
       let message = $('#input-text').val();
       console.log("Input is of: " + typeof(message));
       let text = {
           username: "User",
           message
       }
       console.log("2");
       $('.old-chats').remove();
       console.log("3");
       if (chatService.sendMessage(text) == true) {
        console.log("4");
              // chatService.onMessageReceived();
               console.log("5");
        
               var pass;
               testPhy(function(output){
                    console.log("testPy output: " + output);
                    pass = output;
                  
                    console.log("Hop on by: " + typeof(pass));
                    console.log("Juming: " + pass);
                    pass = pass.charAt(0).toUpperCase() + pass.slice(1);
                    pass = pass.split(".");
                    pass = pass[0] + ". " + pass[1] + ". " + pass[2] ;
                    // pass = pass.slice(0,3);
                    // pass = pass.toString();
                    // pass = pass.split(",")
                    pass = pass + ".\n";
                    let response = {
                        username: "AI",
                        message: pass
                    } 
                              
                    if(chatService.sendMessage(response) == true)
                    {
                        chatService.onMessageReceived();
                    }   
               });
               console.log("After function: " + pass);
              /// var passing = testPhy().toS
                   
               
    	}
           console.log("6");
       $('#message-form').trigger('reset');
       console.log("7");
    }
   });
   console.log("12");

});



function profanityCheck(){

    String.prototype.includes = function(str) { return this.indexOf(str) != -1; };
    var stringData = document.getElementById("input-text").value;
    
    stringData = stringData.toLowerCase();
    
    console.log("VALUE IS: " + stringData);
    
    var profanities = new Array("ass", "cunt", "fuck", "bitch", "damn", 
    "asshole", "faggot", "motherfucker", "dick", "pussy", 
    "bastard", "shit");
    
    var doesInclude = false;
    
    doesInclude = profanities.some(word => stringData.includes(word));
    
    /*
    Here Cameron we can make it so that the AI responds or have an
    Alert that alerts the user to not use profanity. 
    */
    if(doesInclude == true)
        {
            alert("Please do not write profanity into the bar.");
            return true;
            // delete message
        }
    else
        {
            return false;
            //alert("NO CURSES");
            //All good
        }
    
    }
    
    