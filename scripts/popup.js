    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != "function") {
            window.onload = func;
        } else {
            window.onload = function() {
                oldonload();
                func();
            }
        }
    }


/* Courtesy of X Thomas Frost http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html */

function popUp(url, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, "", 'scrollbars=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}


function prepareLinks(){
    if (!document.getElementsByTagName) return false;
    var anchors = document.getElementsByTagName("a");
    for (var i=0; i<anchors.length; i++){
        if (anchors[i].getAttribute("class") == "popup"){
            anchors[i].onclick = function(){
                popUp(this.getAttribute("href"), "550", "280");
                return false;
            }
        }
    }
}

addLoadEvent(prepareLinks);
