var game = new Phaser.Game(1400, 800, Phaser.CANVAS, 'content', { preload: preload, create: create });

var style = {
	font: "16px Arial", fill: "#fff",
	align: "left",
	boundsAlignH: "left",
	boundsAlignV: "top",
	wordWrap: true, wordWrapWidth: 300
};

var style2 = {
	font: "14px Arial", fill: "#fff",
	align: "left",
	boundsAlignH: "left",
	boundsAlignV: "top",
	wordWrap: true, wordWrapWidth: 300
};

var turn = 1;
var turnText;

var buttons = { birth: {}, funding: {}, fishing: {}, hunting: {}, consommation: {}, industry: {}, levelHousing: {}, markets: {}, help: {} };

function preload() {
	game.add.plugin(PhaserInput.Plugin);
	game.load.image('background', 'assets/images/Background2.png');
	game.load.image('endTurn', 'assets/images/Orange.png');
	game.load.image('off', 'assets/images/buttonOff.png');
	game.load.image('on', 'assets/images/buttonOn.png');
	game.load.image('topBar', 'assets/images/topBar.png');
	game.load.image('infoBar', 'assets/images/infoBar.png');
	game.load.image('politiesBar', 'assets/images/politiesBar.png');
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
	help();
}

function addCountry1() {
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(20, 20, 150, 220);
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
	game.add.text(20, 200, '- Industry :', style);
	game.add.text(20, 220, '- Housing :', style);

	country1.text.citizens = game.add.text(120, 20, country1.citizens, style);
	country1.text.food = game.add.text(120, 40, country1.food, style);
	country1.text.happiness = game.add.text(120, 60, country1.happiness, style);
	country1.text.gold = game.add.text(120, 80, country1.gold, style);
	country1.text.research = game.add.text(120, 100, country1.research, style);
	country1.text.arable = game.add.text(120, 140, country1.lands.arable, style);
	country1.text.sea = game.add.text(120, 160, country1.lands.sea, style);
	country1.text.forest = game.add.text(120, 180, country1.lands.forest, style);
	country1.text.industry = game.add.text(120, 200, country1.lands.industry, style);
	country1.text.housing = game.add.text(120, 220, country1.lands.housing, style);
}
function addCountry2() {
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(20, 580, 150, 220);
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
	game.add.text(20, 760, '- Industry :', style);
	game.add.text(20, 780, '- Housing :', style);

	country2.text.citizens = game.add.text(120, 580, country2.citizens, style);
	country2.text.food = game.add.text(120, 600, country2.food, style);
	country2.text.happiness = game.add.text(120, 620, country2.happiness, style);
	country2.text.gold = game.add.text(120, 640, country2.gold, style);
	country2.text.research = game.add.text(120, 660, country2.research, style);
	country2.text.arable = game.add.text(120, 700, country2.lands.arable, style);
	country2.text.sea = game.add.text(120, 720, country2.lands.sea, style);
	country2.text.forest = game.add.text(120, 740, country2.lands.forest, style);
	country2.text.industry = game.add.text(120, 760, country2.lands.industry, style);
	country2.text.housing = game.add.text(120, 780, country2.lands.housing, style);
}
function addCountry3() {
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(1230, 20, 150, 220);
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
	game.add.text(1230, 200, '- Industry :', style);
	game.add.text(1230, 220, '- Housing :', style);

	country3.text.citizens = game.add.text(1330, 20, country3.citizens, style);
	country3.text.food = game.add.text(1330, 40, country3.food, style);
	country3.text.happiness = game.add.text(1330, 60, country3.happiness, style);
	country3.text.gold = game.add.text(1330, 80, country3.gold, style);
	country3.text.research = game.add.text(1330, 100, country3.research, style);
	country3.text.arable = game.add.text(1330, 140, country3.lands.arable, style);
	country3.text.sea = game.add.text(1330, 160, country3.lands.sea, style);
	country3.text.forest = game.add.text(1330, 180, country3.lands.forest, style);
	country3.text.industry = game.add.text(1330, 200, country3.lands.industry, style);
	country3.text.housing = game.add.text(1330, 220, country3.lands.housing, style);
}
function addCountry4() {
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(1230, 580, 150, 220);
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
	game.add.text(1230, 760, '- Industry :', style);
	game.add.text(1230, 780, '- Housing :', style);

	country4.text.citizens = game.add.text(1330, 580, country4.citizens, style);
	country4.text.food = game.add.text(1330, 600, country4.food, style);
	country4.text.happiness = game.add.text(1330, 620, country4.happiness, style);
	country4.text.gold = game.add.text(1330, 640, country4.gold, style);
	country4.text.research = game.add.text(1330, 660, country4.research, style);
	country4.text.arable = game.add.text(1330, 700, country4.lands.arable, style);
	country4.text.sea = game.add.text(1330, 720, country4.lands.sea, style);
	country4.text.forest = game.add.text(1330, 740, country4.lands.forest, style);
	country4.text.industry = game.add.text(1330, 760, country4.lands.industry, style);
	country4.text.housing = game.add.text(1330, 780, country4.lands.housing, style);
}
function addCountryPlayer() {
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(625, 300, 150, 220);
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
	game.add.text(625, 480, '- Industry :', style);
	game.add.text(625, 500, '- Housing :', style);

	countryPlayer.text.citizens = game.add.text(725, 300, countryPlayer.citizens, style);
	countryPlayer.text.food = game.add.text(725, 320, countryPlayer.food, style);
	countryPlayer.text.happiness = game.add.text(725, 340, countryPlayer.happiness, style);
	countryPlayer.text.gold = game.add.text(725, 360, countryPlayer.gold, style);
	countryPlayer.text.research = game.add.text(725, 380, countryPlayer.research, style);
	countryPlayer.text.arable = game.add.text(725, 420, countryPlayer.lands.arable, style);
	countryPlayer.text.sea = game.add.text(725, 440, countryPlayer.lands.sea, style);
	countryPlayer.text.forest = game.add.text(725, 460, countryPlayer.lands.forest, style);
	countryPlayer.text.industry = game.add.text(725, 480, countryPlayer.lands.industry, style);
	countryPlayer.text.housing = game.add.text(725, 500, countryPlayer.lands.housing, style);
}
function addPlayerInfos() {
	// -- Informations
	var graphics = game.add.sprite(470,0,'topBar');
	graphics.scale.set(4, 3);

	var helpButton = game.add.button(530, 10, 'endTurn', help, this, 2, 1, 0);
	helpButton.scale.set(0.2, 0.2);
	game.add.text(555, 30, 'Help', style);

	game.add.text(680, 30, 'Turn ', style);
	turnText = game.add.text(730, 30, turn, style);

	var endButton = game.add.button(800, 10, 'endTurn', endTurn, this, 2, 1, 0);
	endButton.scale.set(0.25, 0.2);
	game.add.text(825, 30, 'End Turn', style);

	// -- Player rules
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(350, 550, 700, 250);
	graphics.endFill();

	game.add.text(360, 550, 'Birth Polity', style);
	buttons.birth.normal = game.add.button(360, 590, 'on', birthPolityNormal, this, 2, 1, 0);
	buttons.birth.normal.scale.set(0.5, 0.5);
	game.add.text(390, 590, 'Normal', style2);
	buttons.birth.studyPolity = game.add.button(360, 630, 'off', birthPolityStudy, this, 2, 1, 0);
	buttons.birth.studyPolity.scale.set(0.5, 0.5);
	game.add.text(390, 630, 'Study Polity', style2);
	buttons.birth.control = game.add.button(360, 670, 'off', birthPolityControl, this, 2, 1, 0);
	buttons.birth.control.scale.set(0.5, 0.5);
	game.add.text(390, 670, 'Birth Control', style2);

	game.add.text(490, 550, 'Funding', style);
	buttons.funding.no = game.add.button(490, 590, 'on', fundingNo, this, 2, 1, 0);
	buttons.funding.no.scale.set(0.5, 0.5);
	game.add.text(520, 590, 'No', style2);
	buttons.funding.researchFund = game.add.button(490, 630, 'off', fundingResearchFund, this, 2, 1, 0);
	buttons.funding.researchFund.scale.set(0.5, 0.5);
	game.add.text(520, 630, 'Research Fund', style2);
	buttons.funding.homeRenovation = game.add.button(490, 670, 'off', fundingHomeRenovation, this, 2, 1, 0);
	buttons.funding.homeRenovation.scale.set(0.5, 0.5);
	game.add.text(520, 670, 'Home Renovation', style2);

	game.add.text(650, 550, 'Fishing', style);
	buttons.fishing.repopulation = game.add.button(650, 590, 'off', fishingRepopulation, this, 2, 1, 0);
	buttons.fishing.repopulation.scale.set(0.5, 0.5);
	game.add.text(680, 590, 'Repopulation', style2);
	buttons.fishing.normal = game.add.button(650, 630, 'on', fishingNormal, this, 2, 1, 0);
	buttons.fishing.normal.scale.set(0.5, 0.5);
	game.add.text(680, 630, 'Normal', style2);
	buttons.fishing.intensive = game.add.button(650, 670, 'off', fishingIntensive, this, 2, 1, 0);
	buttons.fishing.intensive.scale.set(0.5, 0.5);
	game.add.text(680, 670, 'Intensive', style2);

	game.add.text(790, 550, 'Hunting', style);
	buttons.hunting.repopulation = game.add.button(790, 590, 'off', huntingRepopulation, this, 2, 1, 0);
	buttons.hunting.repopulation.scale.set(0.5, 0.5);
	game.add.text(820, 590, 'Repopulation', style2);
	buttons.hunting.normal = game.add.button(790, 630, 'on', huntingNormal, this, 2, 1, 0);
	buttons.hunting.normal.scale.set(0.5, 0.5);
	game.add.text(820, 630, 'Normal', style2);
	buttons.hunting.intensive = game.add.button(790, 670, 'off', huntingIntensive, this, 2, 1, 0);
	buttons.hunting.intensive.scale.set(0.5, 0.5);
	game.add.text(820, 670, 'Intensive', style2);

	game.add.text(930, 550, 'Consommation', style);
	buttons.consommation.rationing = game.add.button(930, 590, 'off', consommationRationing, this, 2, 1, 0);
	buttons.consommation.rationing.scale.set(0.5, 0.5);
	game.add.text(960, 590, 'Rationing', style2);
	buttons.consommation.normal = game.add.button(930, 630, 'on', consommationNormal, this, 2, 1, 0);
	buttons.consommation.normal.scale.set(0.5, 0.5);
	game.add.text(960, 630, 'Normal', style2);
	buttons.consommation.profusion = game.add.button(930, 670, 'off', consommationProfusion, this, 2, 1, 0);
	buttons.consommation.profusion.scale.set(0.5, 0.5);
	game.add.text(960, 670, 'Profusion', style2);

	game.add.text(370, 720, 'Industry Development', style);
	buttons.industry.yes = game.add.button(370, 750, 'off', industryDevYes, this, 2, 1, 0);
	buttons.industry.yes.scale.set(0.5, 0.5);
	game.add.text(400, 750, 'Yes', style2);
	buttons.industry.no = game.add.button(450, 750, 'on', industryDevNo, this, 2, 1, 0);
	buttons.industry.no.scale.set(0.5, 0.5);
	game.add.text(480, 750, 'No', style2);

	game.add.text(700, 720, 'Housing Level', style);
	game.add.text(720, 750, 'Actual :', style2);
	countryPlayer.text.levelHousing = game.add.text(780, 750, countryPlayer.rules.levelHousing, style2);
	buttons.levelHousing.upgrade = game.add.button(850, 750, 'on', upgradeLevelHousing, this, 2, 1, 0);
	buttons.levelHousing.upgrade.scale.set(4, 0.7);
	countryPlayer.text.levelHousingUpgrade = game.add.text(880, 755, 'Upgrade : 50 Gold', style2);
}
function addMarkets() {
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(250, 150, 280, 150);
	graphics.endFill();

	game.add.text(250, 150, 'Market', style);
	buttons.markets.foodForGold = game.add.button(280, 200, 'on', foodForGold, this, 2, 1, 0);
	buttons.markets.foodForGold.scale.set(5, 0.7);
	countryPlayer.text.markets.foodForGold = game.add.text(320, 205, '10 Food For 20 Gold', style2);
	buttons.markets.foodForResearch = game.add.button(280, 250, 'on', foodForResearch, this, 2, 1, 0);
	buttons.markets.foodForResearch.scale.set(5, 0.7);
	countryPlayer.text.markets.foodForResearch = game.add.text(310, 255, '10 Food For 15 Research', style2);

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(150, 350, 280, 150);
	graphics.endFill();

	game.add.text(150, 350, 'Market', style);
	buttons.markets.goldForFood = game.add.button(180, 400, 'on', goldForFood, this, 2, 1, 0);
	buttons.markets.goldForFood.scale.set(5, 0.7);
	countryPlayer.text.levelHousingUpgrade = game.add.text(235, 405, '10 Gold For 30 Food', style2);
	buttons.markets.goldForResearch = game.add.button(180, 450, 'on', goldForResearch, this, 2, 1, 0);
	buttons.markets.goldForResearch.scale.set(5, 0.7);
	countryPlayer.text.levelHousingUpgrade = game.add.text(220, 455, '10 Gold For 20 Research', style2);

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(870, 150, 280, 150);
	graphics.endFill();

	game.add.text(870, 150, 'Market', style);
	buttons.markets.researchForFood = game.add.button(900, 200, 'on', researchForFood, this, 2, 1, 0);
	buttons.markets.researchForFood.scale.set(5, 0.7);
	countryPlayer.text.levelHousingUpgrade = game.add.text(930, 205, '10 Research For 20 Food', style2);
	buttons.markets.researchForGold = game.add.button(900, 250, 'on', researchForGold, this, 2, 1, 0);
	buttons.markets.researchForGold.scale.set(5, 0.7);
	countryPlayer.text.levelHousingUpgrade = game.add.text(930, 255, '10 Research For 30 Gold', style2);

	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(970, 350, 280, 150);
	graphics.endFill();

	game.add.text(970, 350, 'Market', style);
	buttons.markets.goldForFood2 = game.add.button(1000, 400, 'on', goldForFood2, this, 2, 1, 0);
	buttons.markets.goldForFood2.scale.set(5, 0.7);
	countryPlayer.text.levelHousingUpgrade = game.add.text(1040, 405, '10 Gold For 20 Food', style2);
	buttons.markets.goldForResearch2 = game.add.button(1000, 450, 'on', goldForResearch2, this, 2, 1, 0);
	buttons.markets.goldForResearch2.scale.set(5, 0.7);
	countryPlayer.text.levelHousingUpgrade = game.add.text(1040, 455, '10 Gold For 30 Research', style2);
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

	// New Rules for other countries

	// Refresh Market
	refreshMarket(country1);
	refreshMarket(country2);
	refreshMarket(country3);
	refreshMarket(country4);

	// Global Event
	turn++;
	turnText.setText(turn);

}
function gameOver() {
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(625, 300, 150, 220);
	graphics.endFill();

	game.add.text(625, 300, 'Game over', style);
}
function victory(country) {
	var x, y;
	switch (country.name) {
		case 'Peaslands': x = 20; y = 20; break;
		case 'Richiztan': x = 20; y = 580; break;
		case 'Intelligencia': x = 1230; y = 20; break;
		case 'Industrand': x = 1230; y = 580; break;
		case 'Player': x = 625, y = 300; break;
	}
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(x, y, 150, 220);
	graphics.endFill();

	game.add.text(x, y, 'Win !', style);
}