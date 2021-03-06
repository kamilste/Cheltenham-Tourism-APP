	var battery = navigator.battery || navigator.msBattery || navigator.mozBattery || navigator.webkitBattery || navigator.oBattery;
	var batteryIndicator = document.querySelector("#indicator"); 
	if (battery) {
		battery.addEventListener("chargingchange", updateBatteryNotification);
		battery.addEventListener("levelchange", updateBatteryNotification);
		updateBatteryNotification();} 
	else {}// no battery support

	function updateBatteryNotification() {// draw battery level    
		batteryIndicator.style.width = battery.level * 100 + "%";	// check if battery is charging    
		if (battery.charging) {
			setClass(batteryIndicator, "charging");} 
		else {
			setClass(batteryIndicator, "notCharging");}} 
	
	function setClass(element, classToAdd) {
		element.className = classToAdd;}
