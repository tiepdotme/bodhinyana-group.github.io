function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement,targetElement.nextSibling);
            }
    }



function createPrintLink(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementsByClassName("title")) return false;
    if (!document.getElementsByTagName) return false;
    var anchor = document.createElement("a");
    anchor.setAttribute("id", "print");
    var faPrint  = document.createElement("i");
    faPrint.setAttribute("class", "fa fa-fw fa-print");
    anchor.appendChild(faPrint);
    var text = document.createTextNode("print this reading");
    anchor.appendChild(text);
    anchor.onclick = function(){window.print(); return false;}
    var title = document.getElementsByClassName("leader-name")[0];
    insertAfter(anchor, title);
}

addLoadEvent(createPrintLink);
