function testPhy(passingData)
{
            var totalReply;
            var modelType = localStorage.getItem("genre");
            modelType = modelType.toString();
            console.log("MODEL IS: " + modelType);
            var pythonPath = '../Phython/text_generation.py';
            
            if(modelType.includes("Fantasy"))
            {
              console.log("WITHIN FANTASY");
              pythonPath = '../Phython/Fantasy_text.py';
            }
            else if(modelType.includes("Mystery"))
            {
              console.log("WITHIN MYSTERY");
              pythonPath = '../Phython/Mystery_text.py';
            }
            else if(modelType.includes("Sci Fi"))
            {
              console.log("WITHIN SCIFI");
              pythonPath = '../Phython/Sci_Fi_text.py';
            }
            console.log("Path IS: " + pythonPath);
            $.post('/testData', {filePath: 'Trying'});

        $.ajax({
            type: 'POST',
            url: "http://localhost:3000",
            data: {path: pythonPath, userInput: getInput()},
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
        data: {data: "TEST"},
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

function getInput()
{
  var inputUser = document.getElementById("input-text").value;
  

  return inputUser;
}