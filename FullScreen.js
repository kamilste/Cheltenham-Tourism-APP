	
function goFullscreen(id) {
	var element = document.getElementById(id); // Get the element that we want to take into fullscreen mode
	if (element.mozRequestFullScreen) {
	element.mozRequestFullScreen();} // Go into fullscreen mode in Firefox
		else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();}} //Go into fullscreen mode in Chrome and Safari
		

		
			function exitFullscreen() {
  				if(document.exitFullscreen) {
     				document.exitFullscreen();} 
				else if(document.mozCancelFullScreen) {
			    	document.mozCancelFullScreen();} 
				else if(document.webkitExitFullscreen) {
					document.webkitExitFullscreen();}}
				exitFullscreen(); // Cancel fullscreen
		