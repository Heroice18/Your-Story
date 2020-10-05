// source code:  https://github.com/cometchat-pro-tutorials/jquery-chat-app
$(document).ready(function() {
   chatService.fetchMessages();

   $('#message-form').submit(function(e) {    
       e.preventDefault();
       let message = $('#input-text').val();
       let text = {
           username: "User",
           message
       }
       $('.old-chats').remove();
       if (chatService.sendMessage(text) == true) {
    	   if (textCheck.profanityCheck() == true) {
        	   chatService.onMessageReceived();
    	   }
	   }
       $('#message-form').trigger('reset');
   });
});