//var links is defined in links.js

var keysLeft = 0; //holds the number of keys left for processing
var keys = []; //holds all the keys
var feed = 0; //iterator for keys[]

//counts the number of key-value pairs in links.js and makes a seperate array for keys.
document.addEventListener('DOMContentLoaded', function(event) {
    var index = 0;
    
    for (j in links) {
        keysLeft++;
    }
    
    index = keysLeft - 1;

    //adds keys in reverse because javascript sorts sequential numneric keys in ascending order, but descending is needed. 
    for (j in links) {
        keys[index] = j;
        index--;
    }

    //render the first 20 divs
    addDivs(); 
})

//scroll event on window. if (cond.) == true when scrollbar reaches to the mid-section minus some offset i.e. 2
window.onscroll = function(ev) {
    if (((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight / 2) - 2) && keysLeft > 0) {
        addDivs();
    }
};

//tries to add 20 div elements into <div class="container">
function addDivs () {
    var length = 20;

    if (keysLeft < 20) {
        length = keysLeft;
    }
    
    var div = [length];

    for (i = 0; i < length; i++) {
        (function () {
            div[i] = document.createElement("div");
            var link = links[keys[feed]]; //assigning link associated with the particular key
            div[i].className = 'item'; //.item propeties are defined in index.css
            div[i].style.backgroundImage = "url('image/" + keys[feed] + ".jpg')"; //assigning image path
            div[i].addEventListener('click', function() {
                window.open(link, "_blank"); //opens new link in new tab
            }, false);
            
            document.getElementsByClassName('container')[0].appendChild(div[i]);
        }()); //anonymous function for tackling closure on var link
        
        keysLeft--;
        feed++;
    }
}