function testPhy()
{
            var totalReply;
            // $.ajax({
            //   url: "./Phython/test.py",
            //   type: "GET",
            //   success: function(dataR){
            //       console.log("LK: " + dataR)
            //   },
            //   error: function(request, status, error) { 
            //   console.log("Error: " + error) 
            //   }
            // });

            // $.get('./Node/Basic.js', function(list) {
            //     //$('#response').html(list); // show the list
            //     console.log("WORKING");
            // });

            $.ajax({
        url: "http://localhost:3000",
        // dataType: "jsonp",
        data: '{"data": "TEST"}',
        type: 'Get',
        jsonpCallback: 'callback', // this is not relevant to the POST anymore
        success: function (data) {
           totalReply = data;
            console.log('Success: ' + totalReply);
         //   chatService.sendMessage(totalReply);
         console.log("checking reply2: " + typeof(totalReply));
        // return totalReply;
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
            
        },
    });

    console.log("reply before return: " + totalReply);
    return totalReply;
}