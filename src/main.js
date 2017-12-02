var game = new Phaser.Game(1400, 800, Phaser.CANVAS, 'content', { preload: preload, create: create });

var style = {
	font: "16px Arial", fill: "#fff",
	align: "left",
	boundsAlignH: "left",
	boundsAlignV: "top",
	wordWrap: true, wordWrapWidth: 300
};

function preload() {
	game.load.image('background', 'assets/images/Background2.png');
	game.load.image('endTurn', 'assets/images/Orange.png');
}

function create() {
	game.add.tileSprite(0, 0, 1400, 800, 'background');
	addLinks();
	addMarkets();
	addPlayerInfos();
	addCountry1();
	addCountry2();
	addCountry3();
	addCountry4();
	addCountryPlayer();
}

function addCountry1() {
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(20, 20, 150, 200);
	graphics.endFill();

	game.add.text(20, 20, 'Citizens :', style);
	game.add.text(20, 40, 'Food :', style);
	game.add.text(20, 60, 'Happiness :', style);
	game.add.text(20, 80, 'Gold :', style);
	game.add.text(20, 100, 'Research :', style);
	game.add.text(20, 120, 'Lands :', style);
	game.add.text(20, 140, '- Arable :', style);
	game.add.text(20, 160, '- Sea : :', style);
	game.add.text(20, 180, '- Forest :', style);
	game.add.text(20, 200, '- Housing :', style);

	country1.text.citizens = game.add.text(120, 20, country1.citizens, style);
	country1.text.food = game.add.text(120, 40, country1.food, style);
	country1.text.happiness = game.add.text(120, 60, country1.happiness, style);
	country1.text.gold = game.add.text(120, 80, country1.gold, style);
	country1.text.research = game.add.text(120, 100, country1.research, style);
	country1.text.arable = game.add.text(120, 140, country1.lands.arable, style);
	country1.text.sea = game.add.text(120, 160, country1.lands.sea, style);
	country1.text.forest = game.add.text(120, 180, country1.lands.forest, style);
	country1.text.housing = game.add.text(120, 200, country1.lands.housing, style);
}
function addCountry2() {
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(20, 580, 150, 200);
	graphics.endFill();

	game.add.text(20, 580, 'Citizens :', style);
	game.add.text(20, 600, 'Food :', style);
	game.add.text(20, 620, 'Happiness :', style);
	game.add.text(20, 640, 'Gold :', style);
	game.add.text(20, 660, 'Research :', style);
	game.add.text(20, 680, 'Lands :', style);
	game.add.text(20, 700, '- Arable :', style);
	game.add.text(20, 720, '- Sea : :', style);
	game.add.text(20, 740, '- Forest :', style);
	game.add.text(20, 760, '- Housing :', style);

	country2.text.citizens = game.add.text(120, 580, country2.citizens, style);
	country2.text.food = game.add.text(120, 600, country2.food, style);
	country2.text.happiness = game.add.text(120, 620, country2.happiness, style);
	country2.text.gold = game.add.text(120, 640, country2.gold, style);
	country2.text.research = game.add.text(120, 660, country2.research, style);
	country2.text.arable = game.add.text(120, 700, country2.lands.arable, style);
	country2.text.sea = game.add.text(120, 720, country2.lands.sea, style);
	country2.text.forest = game.add.text(120, 740, country2.lands.forest, style);
	country2.text.housing = game.add.text(120, 760, country2.lands.housing, style);
}
function addCountry3() {
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(1230, 20, 150, 200);
	graphics.endFill();

	game.add.text(1230, 20, 'Citizens :', style);
	game.add.text(1230, 40, 'Food :', style);
	game.add.text(1230, 60, 'Happiness :', style);
	game.add.text(1230, 80, 'Gold :', style);
	game.add.text(1230, 100, 'Research :', style);
	game.add.text(1230, 120, 'Lands :', style);
	game.add.text(1230, 140, '- Arable :', style);
	game.add.text(1230, 160, '- Sea : :', style);
	game.add.text(1230, 180, '- Forest :', style);
	game.add.text(1230, 200, '- Housing :', style);

	country3.text.citizens = game.add.text(1330, 20, country3.citizens, style);
	country3.text.food = game.add.text(1330, 40, country3.food, style);
	country3.text.happiness = game.add.text(1330, 60, country3.happiness, style);
	country3.text.gold = game.add.text(1330, 80, country3.gold, style);
	country3.text.research = game.add.text(1330, 100, country3.research, style);
	country3.text.arable = game.add.text(1330, 140, country3.lands.arable, style);
	country3.text.sea = game.add.text(1330, 160, country3.lands.sea, style);
	country3.text.forest = game.add.text(1330, 180, country3.lands.forest, style);
	country3.text.housing = game.add.text(1330, 200, country3.lands.housing, style);
}
function addCountry4() {
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(1230, 580, 150, 200);
	graphics.endFill();

	game.add.text(1230, 580, 'Citizens :', style);
	game.add.text(1230, 600, 'Food :', style);
	game.add.text(1230, 620, 'Happiness :', style);
	game.add.text(1230, 640, 'Gold :', style);
	game.add.text(1230, 660, 'Research :', style);
	game.add.text(1230, 680, 'Lands :', style);
	game.add.text(1230, 700, '- Arable :', style);
	game.add.text(1230, 720, '- Sea : :', style);
	game.add.text(1230, 740, '- Forest :', style);
	game.add.text(1230, 760, '- Housing :', style);

	country4.text.citizens = game.add.text(1330, 580, country4.citizens, style);
	country4.text.food = game.add.text(1330, 600, country4.food, style);
	country4.text.happiness = game.add.text(1330, 620, country4.happiness, style);
	country4.text.gold = game.add.text(1330, 640, country4.gold, style);
	country4.text.research = game.add.text(1330, 660, country4.research, style);
	country4.text.arable = game.add.text(1330, 700, country4.lands.arable, style);
	country4.text.sea = game.add.text(1330, 720, country4.lands.sea, style);
	country4.text.forest = game.add.text(1330, 740, country4.lands.forest, style);
	country4.text.housing = game.add.text(1330, 760, country4.lands.housing, style);
}
function addCountryPlayer() {
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(625, 300, 150, 200);
	graphics.endFill();

	game.add.text(625, 300, 'Citizens :', style);
	game.add.text(625, 320, 'Food :', style);
	game.add.text(625, 340, 'Happiness :', style);
	game.add.text(625, 360, 'Gold :', style);
	game.add.text(625, 380, 'Research :', style);
	game.add.text(625, 400, 'Lands :', style);
	game.add.text(625, 420, '- Arable :', style);
	game.add.text(625, 440, '- Sea : :', style);
	game.add.text(625, 460, '- Forest :', style);
	game.add.text(625, 480, '- Housing :', style);

	countryPlayer.text.citizens = game.add.text(725, 300, countryPlayer.citizens, style);
	countryPlayer.text.food = game.add.text(725, 320, countryPlayer.food, style);
	countryPlayer.text.happiness = game.add.text(725, 340, countryPlayer.happiness, style);
	countryPlayer.text.gold = game.add.text(725, 360, countryPlayer.gold, style);
	countryPlayer.text.research = game.add.text(725, 380, countryPlayer.research, style);
	countryPlayer.text.arable = game.add.text(725, 420, countryPlayer.lands.arable, style);
	countryPlayer.text.sea = game.add.text(725, 440, countryPlayer.lands.sea, style);
	countryPlayer.text.forest = game.add.text(725, 460, countryPlayer.lands.forest, style);
	countryPlayer.text.housing = game.add.text(725, 480, countryPlayer.lands.housing, style);
}
function addPlayerInfos() {
	// -- Informations
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(350, 0, 700, 80);
	graphics.endFill();

	// -- Player rules
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(350, 550, 700, 800);
	graphics.endFill();

	var endButton = game.add.button(550, 700, 'endTurn', endTurn, this, 2, 1, 0);
	endButton.scale.set(0.3, 0.2);
}
function addMarkets() {
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(250, 150, 280, 150);
	graphics.endFill();

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(150, 350, 280, 150);
	graphics.endFill();

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(870, 150, 280, 150);
	graphics.endFill();

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(970, 350, 280, 150);
	graphics.endFill();
}
function addLinks() {
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(170, 200, 1060, 5);
	graphics.endFill();

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(110, 420, 1180, 5);
	graphics.endFill();

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(110, 420, 5, 160);
	graphics.endFill();

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(700, 200, 5, 350);
	graphics.endFill();

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(1290, 420, 5, 160);
	graphics.endFill();
}
function endTurn() {

	// Update Statistics
	updateStats(countryPlayer);
	updateStats(country1);
	updateStats(country2);
	updateStats(country3);
	updateStats(country4);

	// Consequences
	consequences(countryPlayer);
	consequences(country1);
	consequences(country2);
	consequences(country3);
	consequences(country4);

	// Refresh Statistics on Board
	refreshStats(country1);
	refreshStats(country2);
	refreshStats(country3);
	refreshStats(country4);
	refreshStats(countryPlayer);

	// Refresh Market

	// New Rules

	// Global Event

}
function gameOver() {
	console.log('game over');
}
function victory(country) {
	console.log(country.name, "win !");
}