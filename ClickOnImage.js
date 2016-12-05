function height() {
	var h = window.innerHeight;
	var a = document.getElementById('container');
	a.style.height = h+"px";
	}
	
window.addEventListener('load',height);
window.addEventListener('resize',height);
