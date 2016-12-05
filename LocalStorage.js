	function initStorage(){
		if(window.localStorage) {
            } else {
				alert('Sorry your browser does not support local storage');}
		function saveName(){
			var name =document.getElementById('name');
			localStorage.setItem('name', name.value);}
		function saveEmail(){
			var email =document.getElementById('email');
			localStorage.setItem('email', email.value);}
		function saveComment(){
			var comment =document.getElementById('comment');
			localStorage.setItem('comment', comment.value);}
		saveName();
		saveEmail();
		saveComment();}
		
	function displayName(){
		if(localStorage.getItem('name') != null){
			document.writeln('<strong>Your name: </strong>'+localStorage.getItem('name'));}}
			
	function displayEmail(){
		if(localStorage.getItem('email') != null){
			document.writeln('<br /> <strong>Your email address: </strong>'+localStorage.getItem('email'));}}
			
	function displayComment(){
		if(localStorage.getItem('comment') != null){
			document.writeln('<br /> <strong>Your comment: </strong>'+localStorage.getItem('comment'));}}
			
	function clearAll(){
		localStorage.clear();
		window.location.reload();}
			
	function reloadPage(){
		window.location.reload(true);}
