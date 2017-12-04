var style = {
	font: "16px Arial", fill: "#fff",
	align: "left",
	boundsAlignH: "left",
	boundsAlignV: "top",
	wordWrap: true, wordWrapWidth: 300
};

function updateStats(country) {

	// Order is important !
	var newFood = 0;
	var forest = country.lands.forest;
	var sea = country.lands.sea;
	var fish = country.population.fish;
	var wild = country.population.wild;

	newFood += country.lands.arable * 20;
	if (country.rules.hunting) newFood += forest * 100;
	if (country.rules.fishing) newFood += sea * 50;
	var consommation = country.citizens * country.rules.citizens;
	country.food = Math.floor(country.food + newFood - consommation);
	if (country.food < 0) country.food = 0;
	country.population.fish -= country.rules.fishing * (sea * 100);
	country.population.wild -= country.rules.hunting * (forest * 50);

	var researchVariation = 5 + (country.citizens / 10);
	if (country.rules.citizens === 1.2) researchVariation += 3;
	country.research += Math.floor(researchVariation);

	var goldVariation = (country.lands.industry * 20);
	country.gold += Math.floor(goldVariation);

	var happinessVariation = 5;
	if (country.food === 0) happinessVariation -= 20;
	if (country.rules.consommation === 1.0) happinessVariation -= 7;
	if (country.rules.consommation === 1.5) happinessVariation += 7;
	if (country.rules.citizens === 1.1) happinessVariation -= 5;
	if (country.lands.noHousing > 0) happinessVariation -= (country.lands.noHousing * 3);
	country.happiness += Math.floor(happinessVariation);
	if (country.happiness > 100) country.happiness = 100;
	if (country.happiness < 0) country.happiness = 0;

	country.citizens = Math.floor(country.citizens * country.rules.citizens);
	var housingVariation = Math.floor(country.citizens / (country.rules.levelHousing * 100));
	country.lands.arable -= (housingVariation - country.lands.housing);
	if (country.lands.arable < 0) {
		country.lands.noHousing -= country.lands.arable;
		country.lands.arable = 0;
	} else {
		country.lands.housing = housingVariation;
		country.lands.noHousing = 0;
	}

	if (country.rules.industrialisation && (country.lands.arable !== 0)) {
		country.lands.arable--;
		country.lands.industry++;
	}

}

function consequences(country) {
	if (country.happiness <= 0) {
		if (country.player) {
			gameOver();
		} else {
			country.alive = false;
		}
	}
	if (country.research >= 1000) {
		victory(country);
	}
}

function refreshStats(country) {
	if (country.alive) {
		country.text.citizens.setText(country.citizens);
		country.text.food.setText(country.food);
		country.text.happiness.setText(country.happiness);
		country.text.gold.setText(country.gold);
		country.text.research.setText(country.research);
		country.text.arable.setText(country.lands.arable);
		country.text.sea.setText(country.lands.sea);
		country.text.forest.setText(country.lands.forest);
		country.text.housing.setText(country.lands.housing);
		country.text.industry.setText(country.lands.industry);
	} else {
		var x, y;
		switch (country.name) {
			case 'Peaslands': x = 20; y = 20; break;
			case 'Richiztan': x = 20; y = 580; break;
			case 'Intelligencia': x = 1230; y = 20; break;
			case 'Industrand': x = 1230; y = 580; break;
		}
		var graphics = game.add.graphics(0, 0);
		graphics.beginFill(0x000000);
		graphics.drawRect(x, y, 150, 220);
		graphics.endFill();

		game.add.text(x, y, 'Revolution !', style);
	}
}

function refreshMarket(country) {

}