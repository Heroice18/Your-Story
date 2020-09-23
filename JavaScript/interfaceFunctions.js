function selectImage(classID)
{
   
    
    var imgLoc = document.getElementById(classID);
    
    //document.getElementsByClassName(classID).src = ""
    if(classID == "fantasyImg")
    {
        var check = document.getElementById(classID).src;
        console.log("IN HERE " + check);

        if(check.includes("selected"))
        {
 
            document.getElementById(classID).src = "./Images/dragon.jpg";
  
        }
        else
        {
            document.getElementById(classID).src = "./Images/dragon-selected.jpg";
        }
          }

    if(classID == "mysteryImg")
    {
        
        var check = document.getElementById(classID).src;
     

        if(check.includes("selected"))
        {
            document.getElementById(classID).src = "./Images/mag glass.jpg";
        }
        else
        {
            document.getElementById(classID).src = "./Images/mag glass-selected.png";
        }
       }

    if(classID == "sciFiImg")
    { 
        var checker = document.getElementById(classID).src;
        

        if(checker.includes("selected"))
        {
            document.getElementById(classID).src = "./Images/Sci Fi space.jpg";
            console.log("Working");
        }
        else
        {
            document.getElementById(classID).src = "./Images/Sci Fi space-selected.jpg";
        }
     
            }

        
}


function checkData()
{
    
}