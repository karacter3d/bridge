var keysLeft = 0;
var keys = [];
var feed = 0;

document.addEventListener('DOMContentLoaded', function(event) {
    
    for (j in links) {
        keysLeft++;
    }
    
    var index = keysLeft - 1;
    
    for (j in links) {
        keys[index] = j;
        index--;
    }

    addDivs(); //Tries to add 20 div elements to .container div
})

//scroll event on window. if cond. = true when scrollbar reaches to the bottom minus some offset i.e. 2
window.onscroll = function(ev) {
    if (((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) && keysLeft > 0) {
        addDivs();
    }
};

function addDivs () {
    var length = 20;

    if (keysLeft < 20) {
        length = keysLeft;
    }
    
    var div = [length];

    for (i = 0; i < length; i++) {
        (function () {
            div[i] = document.createElement("div");
            var link = links[keys[feed]];
            div[i].className = 'item';
            div[i].style.backgroundImage = "url('image/" + keys[feed] + ".jpg')";
            
            div[i].addEventListener('click', function() {
                window.open(link, "_blank");
            }, false);
            
            document.getElementsByClassName('container')[0].appendChild(div[i]);
        }()); // immediate invocation
        keysLeft--;
        feed++;
    }
}