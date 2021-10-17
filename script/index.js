var keysLeft = 0;
var keys = [];
var feed = 0;
var divs = [];
var isEnd = false;

document.addEventListener('DOMContentLoaded', function(event) {
    
    for (j in links) {
        keysLeft++;
    }
    
    var index = keysLeft - 1;
    
    for (j in links) {
        keys[index] = j;
        index--;
    }

    loadnShow(); //Tries to add 20 div elements to .container div
})

//scroll event on window. if cond. = true when scrollbar reaches to the bottom minus some offset i.e. 2
window.onscroll = function(ev) {
    if (((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) && isEnd == false) {
        showDivs();
    }
};

function loadnShow () {
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

    if(keysLeft > 0)
        loadDivs();
}

function loadDivs () {

    var length = 20;

    if (keysLeft < 20) {
        length = keysLeft;
    }
    
    divs = [length];

    for (i = 0; i < length; i++) {
        (function () {
            divs[i] = document.createElement("div");
            var link = links[keys[feed]];
            divs[i].className = 'item';
            divs[i].style.backgroundImage = "url('image/" + keys[feed] + ".jpg')";
            
            divs[i].addEventListener('click', function() {
                window.open(link, "_blank");
            }, false);
            
            //document.getElementsByClassName('container')[0].appendChild(div[i]);
        }()); // immediate invocation
        keysLeft--;
        feed++;
    }
    console.log("in load divs");
}

function showDivs () {
    for (i = 0; i < divs.length; i++) {
        (function () {
            document.getElementsByClassName('container')[0].appendChild(divs[i]);
        }()); // immediate invocation
    }

    if(keysLeft > 0)
        loadDivs();
    else
        isEnd = true;
}
