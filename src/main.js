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
	var graphics = game.add.sprite(5, 15, 'infoBar');
	graphics.scale.set(3.5, 4);

	country1.text.citizensText = game.add.text(55, 105, 'Citizens :', style);
	country1.text.foodText = game.add.text(55, 125, 'Food :', style);
	country1.text.happinessText = game.add.text(55, 145, 'Happiness :', style);
	country1.text.goldText = game.add.text(55, 165, 'Gold :', style);
	country1.text.researchText = game.add.text(55, 185, 'Research :', style);
	country1.text.landsText = game.add.text(55, 205, 'Lands :', style);
	country1.text.arableText = game.add.text(70, 225, 'Arable :', style);
	country1.text.seaText = game.add.text(70, 245, 'Sea : :', style);
	country1.text.forestText = game.add.text(70, 265, 'Forest :', style);
	country1.text.industryText = game.add.text(70, 285, 'Industry :', style);
	country1.text.housingText = game.add.text(70, 305, 'Housing :', style);

	country1.text.citizens = game.add.text(155, 105, country1.citizens, style);
	country1.text.food = game.add.text(155, 125, country1.food, style);
	country1.text.happiness = game.add.text(155, 145, country1.happiness, style);
	country1.text.gold = game.add.text(155, 165, country1.gold, style);
	country1.text.research = game.add.text(155, 185, country1.research, style);
	country1.text.arable = game.add.text(155, 225, country1.lands.arable, style);
	country1.text.sea = game.add.text(155, 245, country1.lands.sea, style);
	country1.text.forest = game.add.text(155, 265, country1.lands.forest, style);
	country1.text.industry = game.add.text(155, 285, country1.lands.industry, style);
	country1.text.housing = game.add.text(155, 305, country1.lands.housing, style);
}
function addCountry2() {
	var graphics = game.add.sprite(5, 410, 'infoBar');
	graphics.scale.set(3.5, 4);

	country2.text.citizensText = game.add.text(55, 500, 'Citizens :', style);
	country2.text.foodText = game.add.text(55, 520, 'Food :', style);
	country2.text.happinessText = game.add.text(55, 540, 'Happiness :', style);
	country2.text.goldText = game.add.text(55, 560, 'Gold :', style);
	country2.text.researchText = game.add.text(55, 580, 'Research :', style);
	country2.text.landsText = game.add.text(55, 600, 'Lands :', style);
	country2.text.arableText = game.add.text(70, 620, 'Arable :', style);
	country2.text.seaText = game.add.text(70, 640, 'Sea : :', style);
	country2.text.forestText = game.add.text(70, 660, 'Forest :', style);
	country2.text.industryText = game.add.text(70, 680, 'Industry :', style);
	country2.text.housingText = game.add.text(70, 700, 'Housing :', style);

	country2.text.citizens = game.add.text(155, 500, country2.citizens, style);
	country2.text.food = game.add.text(155, 520, country2.food, style);
	country2.text.happiness = game.add.text(155, 540, country2.happiness, style);
	country2.text.gold = game.add.text(155, 560, country2.gold, style);
	country2.text.research = game.add.text(155, 580, country2.research, style);
	country2.text.arable = game.add.text(155, 620, country2.lands.arable, style);
	country2.text.sea = game.add.text(155, 640, country2.lands.sea, style);
	country2.text.forest = game.add.text(155, 660, country2.lands.forest, style);
	country2.text.industry = game.add.text(155, 680, country2.lands.industry, style);
	country2.text.housing = game.add.text(155, 700, country2.lands.housing, style);
}
function addCountry3() {
	var graphics = game.add.sprite(1170, 15, 'infoBar');
	graphics.scale.set(3.5, 4);

	country3.text.citizensText = game.add.text(1220, 105, 'Citizens :', style);
	country3.text.foodText = game.add.text(1220, 125, 'Food :', style);
	country3.text.happinessText = game.add.text(1220, 145, 'Happiness :', style);
	country3.text.goldText = game.add.text(1220, 165, 'Gold :', style);
	country3.text.researchText = game.add.text(1220, 185, 'Research :', style);
	country3.text.landsText = game.add.text(1220, 205, 'Lands :', style);
	country3.text.arableText = game.add.text(1235, 225, 'Arable :', style);
	country3.text.seaText = game.add.text(1235, 245, 'Sea : :', style);
	country3.text.forestText = game.add.text(1235, 265, 'Forest :', style);
	country3.text.industryText = game.add.text(1235, 285, 'Industry :', style);
	country3.text.housingText = game.add.text(1235, 305, 'Housing :', style);

	country3.text.citizens = game.add.text(1320, 105, country3.citizens, style);
	country3.text.food = game.add.text(1320, 125, country3.food, style);
	country3.text.happiness = game.add.text(1320, 145, country3.happiness, style);
	country3.text.gold = game.add.text(1320, 165, country3.gold, style);
	country3.text.research = game.add.text(1320, 185, country3.research, style);
	country3.text.arable = game.add.text(1320, 225, country3.lands.arable, style);
	country3.text.sea = game.add.text(1320, 245, country3.lands.sea, style);
	country3.text.forest = game.add.text(1320, 265, country3.lands.forest, style);
	country3.text.industry = game.add.text(1320, 285, country3.lands.industry, style);
	country3.text.housing = game.add.text(1320, 305, country3.lands.housing, style);
}
function addCountry4() {
	var graphics = game.add.sprite(1170, 410, 'infoBar');
	graphics.scale.set(3.5, 4);

	country4.text.citizensText = game.add.text(1220, 500, 'Citizens :', style);
	country4.text.foodText = game.add.text(1220, 520, 'Food :', style);
	country4.text.happinessText = game.add.text(1220, 540, 'Happiness :', style);
	country4.text.goldText = game.add.text(1220, 560, 'Gold :', style);
	country4.text.researchText = game.add.text(1220, 580, 'Research :', style);
	country4.text.landsText = game.add.text(1220, 600, 'Lands :', style);
	country4.text.arableText = game.add.text(1235, 620, 'Arable :', style);
	country4.text.seaText = game.add.text(1235, 640, 'Sea : :', style);
	country4.text.forestText = game.add.text(1235, 660, 'Forest :', style);
	country4.text.industryText = game.add.text(1235, 680, 'Industry :', style);
	country4.text.housingText = game.add.text(1235, 700, 'Housing :', style);

	country4.text.citizens = game.add.text(1320, 500, country4.citizens, style);
	country4.text.food = game.add.text(1320, 520, country4.food, style);
	country4.text.happiness = game.add.text(1320, 540, country4.happiness, style);
	country4.text.gold = game.add.text(1320, 560, country4.gold, style);
	country4.text.research = game.add.text(1320, 580, country4.research, style);
	country4.text.arable = game.add.text(1320, 620, country4.lands.arable, style);
	country4.text.sea = game.add.text(1320, 640, country4.lands.sea, style);
	country4.text.forest = game.add.text(1320, 660, country4.lands.forest, style);
	country4.text.industry = game.add.text(1320, 680, country4.lands.industry, style);
	country4.text.housing = game.add.text(1320, 700, country4.lands.housing, style);
}
function addCountryPlayer() {
	var graphics = game.add.sprite(585, 130, 'infoBar');
	graphics.scale.set(3.5, 4);

	countryPlayer.text.citizensText = game.add.text(635, 220, 'Citizens :', style);
	countryPlayer.text.foodText = game.add.text(635, 240, 'Food :', style);
	countryPlayer.text.happinessText = game.add.text(635, 260, 'Happiness :', style);
	countryPlayer.text.goldText = game.add.text(635, 280, 'Gold :', style);
	countryPlayer.text.researchText = game.add.text(635, 300, 'Research :', style);
	countryPlayer.text.landsText = game.add.text(635, 320, 'Lands :', style);
	countryPlayer.text.arableText = game.add.text(650, 340, 'Arable :', style);
	countryPlayer.text.seaText = game.add.text(650, 360, 'Sea : :', style);
	countryPlayer.text.forestText = game.add.text(650, 380, 'Forest :', style);
	countryPlayer.text.industryText = game.add.text(650, 400, 'Industry :', style);
	countryPlayer.text.housingText = game.add.text(650, 420, 'Housing :', style);

	countryPlayer.text.citizens = game.add.text(735, 220, countryPlayer.citizens, style);
	countryPlayer.text.food = game.add.text(735, 240, countryPlayer.food, style);
	countryPlayer.text.happiness = game.add.text(735, 260, countryPlayer.happiness, style);
	countryPlayer.text.gold = game.add.text(735, 280, countryPlayer.gold, style);
	countryPlayer.text.research = game.add.text(735, 300, countryPlayer.research, style);
	countryPlayer.text.arable = game.add.text(735, 340, countryPlayer.lands.arable, style);
	countryPlayer.text.sea = game.add.text(735, 360, countryPlayer.lands.sea, style);
	countryPlayer.text.forest = game.add.text(735, 380, countryPlayer.lands.forest, style);
	countryPlayer.text.industry = game.add.text(735, 400, countryPlayer.lands.industry, style);
	countryPlayer.text.housing = game.add.text(735, 420, countryPlayer.lands.housing, style);
}
function addPlayerInfos() {
	// -- Informations
	var graphics = game.add.sprite(470, 0, 'topBar');
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
	graphics = game.add.sprite(310, 535, 'politiesBar');
	graphics.scale.set(8.2, 2.7);

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
	buttons.levelHousing.upgrade = game.add.button(850, 730, 'on', upgradeLevelHousing, this, 2, 1, 0);
	buttons.levelHousing.upgrade.scale.set(4, 0.7);
	countryPlayer.text.levelHousingUpgrade = game.add.text(880, 735, 'Upgrade : 50 Gold', style2);
}
function addMarkets() {
	var graphics = game.add.sprite(260, 165, 'politiesBar');
	graphics.scale.set(2.7, 1.1);

	game.add.text(360, 170, 'Market', style);
	buttons.markets.foodForGold = game.add.button(280, 200, 'on', foodForGold, this, 2, 1, 0);
	buttons.markets.foodForGold.scale.set(5, 0.7);
	countryPlayer.text.markets.foodForGold = game.add.text(320, 205, '10 Food For 20 Gold', style2);
	buttons.markets.foodForResearch = game.add.button(280, 250, 'on', foodForResearch, this, 2, 1, 0);
	buttons.markets.foodForResearch.scale.set(5, 0.7);
	countryPlayer.text.markets.foodForResearch = game.add.text(310, 255, '10 Food For 15 Research', style2);

	graphics = game.add.sprite(230, 365, 'politiesBar');
	graphics.scale.set(2.7, 1.1);

	game.add.text(330, 370, 'Market', style);
	buttons.markets.goldForFood = game.add.button(250, 400, 'on', goldForFood, this, 2, 1, 0);
	buttons.markets.goldForFood.scale.set(5, 0.7);
	countryPlayer.text.markets.goldForFood = game.add.text(305, 405, '10 Gold For 30 Food', style2);
	buttons.markets.goldForResearch = game.add.button(250, 450, 'on', goldForResearch, this, 2, 1, 0);
	buttons.markets.goldForResearch.scale.set(5, 0.7);
	countryPlayer.text.markets.goldForResearch = game.add.text(290, 455, '10 Gold For 20 Research', style2);

	graphics = game.add.sprite(880, 165, 'politiesBar');
	graphics.scale.set(2.7, 1.1);

	game.add.text(980, 170, 'Market', style);
	buttons.markets.researchForFood = game.add.button(900, 200, 'on', researchForFood, this, 2, 1, 0);
	buttons.markets.researchForFood.scale.set(5, 0.7);
	countryPlayer.text.markets.researchForFood = game.add.text(930, 205, '10 Research For 20 Food', style2);
	buttons.markets.researchForGold = game.add.button(900, 250, 'on', researchForGold, this, 2, 1, 0);
	buttons.markets.researchForGold.scale.set(5, 0.7);
	countryPlayer.text.markets.researchForGold = game.add.text(930, 255, '10 Research For 30 Gold', style2);

	graphics = game.add.sprite(920, 365, 'politiesBar');
	graphics.scale.set(2.7, 1.1);

	game.add.text(1020, 370, 'Market', style);
	buttons.markets.goldForFood2 = game.add.button(940, 400, 'on', goldForFood2, this, 2, 1, 0);
	buttons.markets.goldForFood2.scale.set(5, 0.7);
	countryPlayer.text.markets.goldForFood2 = game.add.text(985, 405, '10 Gold For 20 Food', style2);
	buttons.markets.goldForResearch2 = game.add.button(940, 450, 'on', goldForResearch2, this, 2, 1, 0);
	buttons.markets.goldForResearch2.scale.set(5, 0.7);
	countryPlayer.text.markets.goldForResearch2 = game.add.text(985, 455, '10 Gold For 30 Research', style2);
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