// extend strings with the method "contains"
String.prototype.contains = function(str) { return this.indexOf(str) != -1; };

// profanities of choice
var profanities = new Array("ass", "cunt", "pope", "fuck", "bitch", "damn", 
"asshole", "faggot", "motherfucker", "dick", "pussy", 
"bastard", );

var containsProfanity = function(text){
    var returnVal = false; 
    for (var i = 0; i < profanities.length; i++) {
        if(text.toLowerCase().contains(profanities[i].toLowerCase())){
            returnVal = true;
            break;
        }
    }
    return returnVal;
}
    
var myText = $('#text').html();

if(containsProfanity(myText)){
   // $('#result').html('That language is profane dude.');
   alert("profanity");

}
else{
    //$('#result').html('That language is just fine.');
    alert("no profanity");
}

