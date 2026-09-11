//your JS code here. If required.
let time = document.getElementById("timer");

let currDate = new Date();

setInterval(
	function () {
		currDate = new Date();

		time.innerHTML = currDate.toLocaleString();
	},1000
)