//This function returns the user to the Home page
function returnHome()
{
    window.location.href = "./Title-Page.html";
}


//This value determines whether or not a single genre is selected
var selectionCount = 0;

/*
This function's purpose is to change the images of the genre's
when clicked. If an image has been selected and the user clicks again
the image will revert to it's original picture.
*/
function selectImage(classID)
{
   
    
    var imgLoc = document.getElementById(classID);
    
    //document.getElementsByClassName(classID).src = ""
    if(classID == "fantasyImg")
    {
        var check = document.getElementById(classID).src;
        

        if(check.includes("selected"))
        {
 
            document.getElementById(classID).src = "./Images/dragon.jpg";
            selectionCount = selectionCount - 1; 

  
        }
        else
        {
            document.getElementById(classID).src = "./Images/dragon-selected.jpg";
            selectionCount = selectionCount + 1; 
        }
          }

    if(classID == "mysteryImg")
    {
        
        var check = document.getElementById(classID).src;
     

        if(check.includes("selected"))
        {
            document.getElementById(classID).src = "./Images/mag glass.jpg";
            selectionCount = selectionCount - 1; 
        }
        else
        {
            document.getElementById(classID).src = "./Images/mag glass-selected.png";
            selectionCount = selectionCount + 1; 
        }
       }

    if(classID == "sciFiImg")
    { 
        var checker = document.getElementById(classID).src;
        

        if(checker.includes("selected"))
        {
            document.getElementById(classID).src = "./Images/Sci Fi space.jpg";
            selectionCount = selectionCount - 1; 
        }
        else
        {
            document.getElementById(classID).src = "./Images/Sci Fi space-selected.jpg";
            selectionCount = selectionCount + 1; 
        }
     
            }

        
}

/*
When the user clicks continue this function will make sure that
only one genre was selected. It will then set a cookie with the genre
and proceed to the Story Info screen. If 0 or more than 1 genre 
was selected an alert will appear, letting the user know to select one 
genre.
*/
function checkData()
{
var mystTag = document.getElementById("mysteryImg").src;
var sciFiTag = document.getElementById("sciFiImg").src;
var fantTag = document.getElementById("fantasyImg").src;        
if(selectionCount == 1)
{

    if(mystTag.includes("selected"))
    {
        document.cookie = "genre = Mystery";
        window.location.href = "./Story-Info.html";
    }
    if(sciFiTag.includes("selected"))
    {
        document.cookie = "genre = Science Fiction";
        window.location.href = "./Story-Info.html";
    }
    if(fantTag.includes("selected"))
    {
        document.cookie = "genre = Fantasy";
        window.location.href = "./Story-Info.html";
    }

}

else
{
    alert("Please select only one Genre out of the 3");
}


}