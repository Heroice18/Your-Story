

function profanityCheck(){

String.prototype.includes = function(str) { return this.indexOf(str) != -1; };
var stringData = document.getElementById("input-text").value;

stringData = stringData.toLowerCase();

console.log("VALUE IS: " + stringData);

var profanities = new Array("ass", "cunt", "pope", "fuck", "bitch", "damn", 
"asshole", "faggot", "motherfucker", "dick", "pussy", 
"bastard", );

var doesInclude = false;

doesInclude = profanities.some(word => stringData.includes(word));

/*
Here Cameron we can make it so that the AI responds or have an
Alert that alerts the user to not use profanity. 
*/
if(doesInclude == true)
    {
        alert("Please do not write profanity into the bar.");
    }
else
    {
        //alert("NO CURSES");
        //All good
    }

}

