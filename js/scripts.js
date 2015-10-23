var xhr, textfile;

//set height for icons div
$("#icons").css("height", $(window).height());

//AJAX calls for content
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
