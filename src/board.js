function birthPolityNormal() {
	countryPlayer.rules.citizens = 1.5;
	buttons.birth.normal.loadTexture('on');
	buttons.birth.studyPolity.loadTexture('off');
	buttons.birth.control.loadTexture('off');
}
function birthPolityStudy() {
	countryPlayer.rules.citizens = 1.2;
	buttons.birth.normal.loadTexture('off');
	buttons.birth.studyPolity.loadTexture('on');
	buttons.birth.control.loadTexture('off');
}
function birthPolityControl() {
	countryPlayer.rules.citizens = 1.1;
	buttons.birth.normal.loadTexture('off');
	buttons.birth.studyPolity.loadTexture('off');
	buttons.birth.control.loadTexture('on');
}

// -------------------------------------------

function fundingNo() {
	countryPlayer.rules.funding = 0;
	buttons.funding.no.loadTexture('on');
	buttons.funding.researchFund.loadTexture('off');
	buttons.funding.homeRenovation.loadTexture('off');
}
function fundingResearchFund() {
	countryPlayer.rules.funding = 0.3;
	buttons.funding.no.loadTexture('off');
	buttons.funding.researchFund.loadTexture('on');
	buttons.funding.homeRenovation.loadTexture('off');
}
function fundingHomeRenovation() {
	countryPlayer.rules.funding = 0.5;
	buttons.funding.no.loadTexture('off');
	buttons.funding.researchFund.loadTexture('off');
	buttons.funding.homeRenovation.loadTexture('on');
}

// -------------------------------------------

function fishingRepopulation() {
	countryPlayer.rules.fishing = -0.5;
	buttons.fishing.repopulation.loadTexture('on');
	buttons.fishing.normal.loadTexture('off');
	buttons.fishing.intensive.loadTexture('off');
}
function fishingNormal() {
	countryPlayer.rules.fishing = 0.5;
	buttons.fishing.repopulation.loadTexture('off');
	buttons.fishing.normal.loadTexture('on');
	buttons.fishing.intensive.loadTexture('off');
}
function fishingIntensive() {
	countryPlayer.rules.fishing = 1;
	buttons.fishing.repopulation.loadTexture('off');
	buttons.fishing.normal.loadTexture('off');
	buttons.fishing.intensive.loadTexture('on');
}

// -------------------------------------------

function huntingRepopulation() {
	countryPlayer.rules.hunting = -0.5;
	buttons.hunting.repopulation.loadTexture('on');
	buttons.hunting.normal.loadTexture('off');
	buttons.hunting.intensive.loadTexture('off');
}
function huntingNormal() {
	countryPlayer.rules.fishing = 0.5;
	buttons.hunting.repopulation.loadTexture('off');
	buttons.hunting.normal.loadTexture('on');
	buttons.hunting.intensive.loadTexture('off');
}
function huntingIntensive() {
	countryPlayer.rules.fishing = 1;
	buttons.hunting.repopulation.loadTexture('off');
	buttons.hunting.normal.loadTexture('off');
	buttons.hunting.intensive.loadTexture('on');
}

// -------------------------------------------

function consommationRationing() {
	countryPlayer.rules.consommation = 1;
	buttons.consommation.rationing.loadTexture('on');
	buttons.consommation.normal.loadTexture('off');
	buttons.consommation.profusion.loadTexture('off');
}
function consommationNormal() {
	countryPlayer.rules.consommation = 1.2;
	buttons.consommation.rationing.loadTexture('off');
	buttons.consommation.normal.loadTexture('on');
	buttons.consommation.profusion.loadTexture('off');
}
function consommationProfusion() {
	countryPlayer.rules.consommation = 1.5;
	buttons.consommation.rationing.loadTexture('off');
	buttons.consommation.normal.loadTexture('off');
	buttons.consommation.profusion.loadTexture('on');
}

// -------------------------------------------

function industryDevYes() {
	countryPlayer.rules.industrialisation = true;
	buttons.industry.yes.loadTexture('on');
	buttons.industry.no.loadTexture('off');
}
function industryDevNo() {
	countryPlayer.rules.industrialisation = false;
	buttons.industry.yes.loadTexture('off');
	buttons.industry.no.loadTexture('on');
}

// -------------------------------------------

function upgradeLevelHousing() {
	var priceToPay = countryPlayer.rules.levelHousing * 50;
	if (countryPlayer.gold >= priceToPay) {
		countryPlayer.gold -= priceToPay;
		countryPlayer.rules.levelHousing++;
		countryPlayer.text.levelHousing.setText(countryPlayer.rules.levelHousing);
		countryPlayer.text.gold.setText(countryPlayer.gold);
		priceToPay += 50;
		countryPlayer.text.levelHousingUpgrade.setText('Upgrade : ' + priceToPay + ' Gold');
	}
}

// -------------------------------------------

function foodForGold() {
	exchange(20, 'gold', 'food', country1);
}

function foodForResearch() {
	exchange(15, 'research', 'food', country1);
}

function goldForFood() {
	exchange(30, 'food', 'gold', country2);
}

function goldForResearch() {
	exchange(20, 'research', 'gold', country2);
}

function researchForFood() {
	exchange(20, 'food', 'research', country3);
}

function researchForGold() {
	exchange(30, 'gold', 'research', country3);
}

function goldForFood2() {
	exchange(20, 'gold', 'gold', country4);
}

function goldForResearch2() {
	exchange(30, 'research', 'gold', country4);
}

function exchange(price, what, forWhat, country) {
	if (countryPlayer[what] >= price && country[forWhat] >= 10) {
		countryPlayer[what] -= price;
		countryPlayer[forWhat] += 10;
		country[what] -= 10;
		country[forWhat] += price;

		country.text[forWhat].setText(country[forWhat]);
		country.text[what].setText(country[what]);

		countryPlayer.text[forWhat].setText(countryPlayer[forWhat]);
		countryPlayer.text[what].setText(countryPlayer[what]);
	}
}

// ------------------------------------------

var helpText = {};

function help() {
	helpText.graphics = game.add.graphics(0, 0);
	helpText.graphics.beginFill(0x000000);
	helpText.graphics.drawRect(200, 100, 1000, 440);
	helpText.graphics.endFill();

	var style3 = {
		font: "20px Arial", fill: "#fff",
		align: "left",
		boundsAlignH: "left",
		boundsAlignV: "top",
		wordWrap: true, wordWrapWidth: 300
	};

	var style2 = {
		font: "15px Arial", fill: "#fff",
		align: "left",
		boundsAlignH: "left",
		boundsAlignV: "top",
		wordWrap: true, wordWrapWidth: 960
	};

	helpText.title = game.add.text(650, 110, 'Human Rises', style3);
	helpText.history1 = game.add.text(0, 0, 'Humans... The most you have, the worse it is... They use arable land for their own comfort, they exploit the oceans and forests to feed themselves until the species are extinct and eat like a horse... At this rate, they will eventually disappear...', style2);
	helpText.history1.setTextBounds(240, 150, 960, 100);
	helpText.history2 = game.add.text(0, 0, 'Fortunately, they have the intelligence to improve the situation. Will they have time, however, to use it for survival ?', style2);
	helpText.history2.setTextBounds(240, 200, 960, 100);
	helpText.goal = game.add.text(0, 0, 'The goal of the game is to reach 1000 Research points before Happiness reaches 0. You can do this by interacting with the politics of your country and trading with your neighbours.', style2);
	helpText.goal.setTextBounds(240, 230, 960, 100);
	helpText.polity1 = game.add.text(0, 0, 'What policies can you pursue ?', style2);
	helpText.polity1.setTextBounds(240, 280, 960, 100);
	helpText.polity2 = game.add.text(0, 0, '- Birth Polity : choose between Normal, Study Polity (use Gold for decrease birth) and Birth Control (drastically reduce births despite Happiness)', style2);
	helpText.polity2.setTextBounds(240, 310, 960, 100);
	helpText.polity3 = game.add.text(0, 0, '- Funding : choose between No funding, Research Fund (use Gold for increase Research) and Home Renovation (use Gold for reduce Housing needs)', style2);
	helpText.polity3.setTextBounds(240, 340, 960, 100);
	helpText.polity4 = game.add.text(0, 0, '- Fishing and Hunting : choose between Repopulation (let the animals reproduce, no extra Food), Normal (little Food for species survival) and Intensive (lot of Food against species destruction)', style2);
	helpText.polity4.setTextBounds(240, 390, 960, 100);
	helpText.polity5 = game.add.text(0, 0, '- Consommation : choose between Rationing (less Food consumed, less Happiness), Normal and Profusion (more Food consumed, more Happiness)', style2);
	helpText.polity5.setTextBounds(240, 440, 960, 100);
	helpText.polity6 = game.add.text(0, 0, '- Industry Development : choose to sacrifice Arable land against Industry land the next turn', style2);
	helpText.polity6.setTextBounds(240, 490, 960, 100);
	helpText.polity7 = game.add.text(0, 0, '- Housing Level : increase this statistic to reduce Housing needs', style2);
	helpText.polity7.setTextBounds(240, 510, 960, 100);

	helpText.button = game.add.button(1000, 480, 'endTurn', closeHelp, this, 2, 1, 0);
	helpText.button.scale.set(0.3, 0.2);
	helpText.buttonText = game.add.text(1040, 500, 'Close', style);
}

function closeHelp() {
	helpText.graphics.destroy();
	helpText.title.destroy();
	helpText.history1.destroy();
	helpText.history2.destroy();
	helpText.goal.destroy();
	helpText.polity1.destroy();
	helpText.polity2.destroy();
	helpText.polity3.destroy();
	helpText.polity4.destroy();
	helpText.polity5.destroy();
	helpText.polity6.destroy();
	helpText.polity7.destroy();
	helpText.button.destroy();
	helpText.buttonText.destroy();
}