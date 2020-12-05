function testPhy(passingData)
{
            var totalReply;
            var modelType = localStorage.getItem("genre");
            var pythonPath = '../Phython/text_generation.py';
            if(modelType == "Fantasy")
            {
              pythonPath = '../Phython/Fantasy_text.py';
            }
            else if(modelType == "Mystery")
            {
              pythonPath = '../Phython/Mystery_text.py';
            }
            else if(modelType == "Sci Fi")
            {
              pythonPath = '../Phython/Sci_Fi_text.py';
            }

        $.ajax({
            type: 'POST',
            url: "http://localhost:3000",
            data: '{"data": "TEST"}',
            success: function(data) {
                //show content
                console.log('Success in sending data! ' + data);
            },
            error: function(jqXHR, textStatus, err) {
                //show error message
                console.log('text status '+textStatus+', err '+err)
            }

        });

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
        passingData(totalReply);
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
            
        },
    });

   // console.log("reply before return: " + totalReply);
   // return totalReply;
}

// function testPhy()
// {

//     passPhy(function(data){
//         console.log("NEW DATA: " + data);
        
//     });

// }