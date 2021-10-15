//Here lies the bad code of karatcer 3d :D

var data, keysLeft;
var keys = [];
var feed = 0;

document.addEventListener('DOMContentLoaded', function(event) {
    var request = new XMLHttpRequest();
    request.open('GET', '/script/data.json', true);

    request.onload = function() {
    if (this.status >= 200 && this.status < 400) {// Success!
        data = JSON.parse(this.response);
        keysLeft = Object.keys(data).length;

        var index = keysLeft - 1;

        for (j in data) {
            keys[index] = j;
            index--;
        }

        addDivs(); //Tries to add 20 div elements to .container div
    } else {
        // We reached our target server, but it returned an error
        }
    };

    request.onerror = function() {
    // There was a connection error of some sort
    };

    request.send();
})

//scroll event on window. if cond. = true when scrollbar reaches to the bottom minus some offset i.e. 2
window.onscroll = function(ev) {
    if (((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) && keysLeft > 0) {
        addDivs();
    }
};

/*
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        addDivs()
    }
});*/

function addDivs () {
    var length = 20;

    if (keysLeft < 20) {
        length = keysLeft;
    }
    
    var div = [length];

    for (i = 0; i < length; i++) {
        (function () {
            div[i] = document.createElement("div");
            var link = data[keys[feed]];
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