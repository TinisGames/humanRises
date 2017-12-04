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