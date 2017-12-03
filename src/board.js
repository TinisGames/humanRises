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
	//countryPlayer.rules.citizens = 1.2;
	buttons.industry.yes.loadTexture('on');
	buttons.industry.no.loadTexture('off');
}
function industryDevNo() {
	//countryPlayer.rules.citizens = 1.1;
	buttons.industry.yes.loadTexture('off');
	buttons.industry.no.loadTexture('on');
}

// -------------------------------------------

function upgradeLevelHousing(){

}