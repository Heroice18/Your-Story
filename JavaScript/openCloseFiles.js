






function passAlong(savedContent)
{
  window.localStorage.setItem("content", savedContent);
  window.location.href = 'Your-Story.html';
  var checkers = localStorage.getItem("content");
    
}


function openFiles()
{
  document.getElementById("file-selector").addEventListener('change', readFileAsString)
  function readFileAsString() {
      var files = this.files;
      if (files.length === 0) {
          console.log('No file is selected');
          return;
      }
  
      var reader = new FileReader();
      reader.onload = function(event) {
          console.log('File content:', event.target.result);

          var content = event.target.result;
          
        console.log("Cookie Check: " + content);
        
        passAlong(content);


      };
      reader.readAsText(files[0]);

    }
  


}
//   const inputElement = document.getElementById("file-selector");

//   //Step 1: Get the file from the input element                
// inputElement.onchange = function(event) {

//   var file = event.target.files[0];

//   //Step 2: Read the file using file reader
//   var fileReader = new FileReader();  

//   fileReader.onload = function() {

//       //Step 4:turn array buffer into typed array
//       var typedarray = new Uint8Array(this.result);

//       //Step 5:PDFJS should be able to read this
//       PDFJS.getDocument(typedarray).then(function(pdf) {
//           // do stuff
//       });


//   };
//   //Step 3:Read the file as ArrayBuffer
//   fileReader.readAsArrayBuffer(file);

// }




  // document.getElementById("file-selector").addEventListener('change', readFileAsString)
  // function readFileAsString() {
  //     var files = this.files;
  //     if (files.length === 0) {
  //         console.log('No file is selected');
  //         return;
  //     }
  
  //     var reader = new FileReader();
  //     reader.onload = function(event) {
  //         console.log('File content:', event.target.result);
  //     };
  //     reader.readAsText(files[0]);

  //   }
  // }

  // const select = document.getElementById("file-selector");
  // select.addEventListener("change", handleFiles, false);
  //   function handleFiles() {
  //   const fileList = this.files; /* now you can work with the file list */
  //   const numFile = fileList.length;

    


  //   for (let i = 0, numFiles = fileList.length; i < numFiles; i++) {
  //     const file = fileList[i];
  //     console.log("LOP: " + file);
  //     var stream = file.stream();
  //     console.log("CHECK: " + stream);

  //     readar = new FileReader();

  //     readar.readAsText(file);

  //     readar.onload = function() {
  //       console.log(readar.result);
  //     };
    
  //     readar.onerror = function() {
  //       console.log(readar.error);
  //     };
  //   }
        



      



  //     fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then(function(response) {
  
  //   console.log(response.text());
  //   return response.text();
  // }).then(function(data) {
  //   // `data` is the parsed version of the JSON returned from the above endpoint.
  //   console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  // });
  //     // ...

  




   


  // const fileSelector = document.getElementById('file-selector');
  // fileSelector.addEventListener('change', (event) => {
  //   const fileList = event.target.files;
  //   console.log(fileList);

  //   for (const file of fileList) {
  //     // Not supported in Safari for iOS.
  //     const name = file.name ? file.name : 'NOT SUPPORTED';
  //     // Not supported in Firefox for Android or Opera for Android.
  //     const type = file.type ? file.type : 'NOT SUPPORTED';
  //     // Unknown cross-browser support.
  //     const size = file.size ? file.size : 'NOT SUPPORTED';
  //     console.log({file, name, type, size});

  //     console.log(file);

  //     let data = {foo: 1, bar: 2};
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       $.ajax({
  //         type: 'POST',
  //         dataType: "json",
  //         data: JSON.stringify({ "dataURL": reader.result }),
  //       });
      
  //     console.log(data);
  //     };

  //   }



  // });





