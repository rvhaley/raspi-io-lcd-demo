const Raspi = require("raspi-io");
const five = require("johnny-five");

const board = new five.Board({
	io : new Raspi()
});

board.on("ready", () => {
	var lcd = new five.LCD({
		pins: ["GPIO5", "GPIO6", "GPIO13", "GPIO16", "GPIO19", "GPIO20"],
		rows: 2,
		cols: 16
	});

	lcd.clear().print("Hello, World!");
});

