function selectImage(classID)
{
   
    
    var imgLoc = document.getElementById(classID);
    
    //document.getElementsByClassName(classID).src = ""
    if(classID == "fantasyImg")
    {
        var check = document.getElementById(classID).src;
        console.log("IN HERE " + check);

        if(document.getElementById(classID).src== "./Images/dragon-selected.jpg")
        {
            console.log("Working");
        }
        document.getElementById(classID).src = "./Images/dragon-selected.jpg";
    }

    if(classID == "mysteryImg")
    {
        console.log("IN HERE " + classID);

        document.getElementById(classID).src = "./Images/mag glass-selected.png";
    }

    if(classID == "sciFiImg")
    {
        console.log("IN HERE " + classID);
        document.getElementById(classID).src = "./Images/Sci Fi space-selected.jpg";
    }

        
}