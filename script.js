function generateClock(btn){
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let seconds = date.getSeconds();
	let day = "AM"
	
	if(hour == 0){
		hour = 12;
	}
	
	if(hour > 12){
		hour-=12;
		day = "PM"
	}
	
	hour = (hour < 10) ? "0" + hour : hour;
	minute = (minute < 10) ? "0" + minute : minute;
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	
	let currentTime = hour + ":" + minute + ":" + seconds + " " + day;
	document.getElementById("displayClock").innerHTML = "<div style='font-size:60px; color:green; border-radius:10px; border:5px dashed #000; padding:20px;'>"+currentTime+"</div>";
	
	setInterval(generateClock, 1000);
	btn.style.display="none";
}

	
