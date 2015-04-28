	// by Simon Willison (http://simon.incuitio.com/)

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != "function"){
		window.onload = func;
	}else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}