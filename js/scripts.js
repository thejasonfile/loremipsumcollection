var xhr, textfile;
	

	function getFile(textfile) {
		xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {
				document.getElementById("loremText").innerHTML = xhr.responseText;
			}
		}
		xhr.open("GET",textfile);
		xhr.send();
	}


//document.getElementById("loremBtn").onclick = getFile("lorem.html");