	/* call the php that has the php array which is json_encoded */
	$.getJSON('cheltenhamphp.php', function(data){
		/* data will hold the php array as a javascript object */
		$.each(data, function(key, val){
			var x = document.getElementById("Cheltenham");
			var option = document.createElement("option");
			option.text = val.BUSTYPE;
			option.value = val.REFERENCE;
			x.add(option);
		})
	});
